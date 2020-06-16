import { IResolvers } from 'graphql-tools';
import { GraphQLResolveInfo } from 'graphql'
import { Context } from './models'

const resolverMap: IResolvers = {
    Query: {
        helloWorld(_:void, args: void, ctx: Context, info: GraphQLResolveInfo): string {
            return `Hello World!`;
        },
    },
};

export default resolverMap
