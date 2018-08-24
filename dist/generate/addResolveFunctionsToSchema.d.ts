import { GraphQLSchema } from 'graphql';
import { IResolvers, IResolverValidationOptions, IAddResolveFunctionsToSchemaOptions } from '../Interfaces';
declare function addResolveFunctionsToSchema(options: IAddResolveFunctionsToSchemaOptions | GraphQLSchema, legacyInputResolvers?: IResolvers, legacyInputValidationOptions?: IResolverValidationOptions): void;
export default addResolveFunctionsToSchema;
