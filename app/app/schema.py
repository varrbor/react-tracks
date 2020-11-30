import graphene
import tracks.schema
import users.schema
import graphql_jwt


class Query(users.schema.Query, tracks.schema.Query, graphene.ObjectType):
    pass

class Mutation(users.schema.Mutation, tracks.schema.Mutation, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)
