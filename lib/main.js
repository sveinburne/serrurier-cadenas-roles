import { DefaultCadenas } from 'meteor/svein:serrurier';
import { Roles } from 'meteor/alanning:roles';
import { Match } from 'meteor/check';
import {
    isUserInRole_s,
    isLoggedUserInRole_s,
} from './roles-utils';

//noinspection JSValidateTypes
/**
 * @desc A partition that resolves with this.getPartition()
 * @type {role_partition}
 */
const AUTO = {};

/**
 * @desc A partition that resolves to the global partition
 * @type {role_partition}
 */
//noinspection JSUnresolvedVariable
const GLOBAL = Roles.GLOBAL_PARTITION;


/**
 * Assert logged user is in [roles]|role, parition
 */
const loggedUserInRole = new DefaultCadenas({
    name: 'loggedUserInRole',
    doesAssertionFails: function ( role_s, partition = GLOBAL ) {
        if( partition === AUTO ) partition = this.getPartition();
        const userNotInRole = !isLoggedUserInRole_s( role_s, partition );
        return userNotInRole && `user.not.in.role:${role_s}:${partition||'GLOBAL'}`
    },
    matchPatterns: [
        // role_s
        Match.OneOf( String, [String] ),
        // partition
        Match.OneOf( String, Match.Where((val) => val === GLOBAL || val === AUTO ) )
    ],
    dependingCadenas: { userIsLoggedIn: [] }

});

const parts = {
    GLOBAL,
    AUTO
};

export {
    parts
}