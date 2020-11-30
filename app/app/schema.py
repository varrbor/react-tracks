import graphene
import tracks.schema
import graphql_jwt


class Query(tracks.schema.Query, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query)
