import { GraphQLError } from "graphql";
import { generateTokens } from "../../helper";
import { User } from "../../models";
import { hash } from "../../helper";

export default {
  Query: {
    users: async () => await User.find(),
    userByName: async (_: any, args: any) =>
      await User.findOne({ first_name: args.name }),
    userById: async (_: any, args: any) => await User.findById(args._id),
  },

  Mutation: {
    createUser: async (_: any, args: any, { res }: any) => {
      return await User.create({
          first_name: args.user.first_name,
          last_name: args.user.last_name,
          email: args.user.email,
          password: await hash(args.user.password),
          role: args.user.role,
          country: args.user.country,
          countryCode: args.user.countryCode,
          number: args.user.number
        })
        .then((user) => {
          // const token = generateTokens(user);
          // res.headers.authorization = `Bearer ${token}`;

          return user;
        })
        .catch((err) => {          
          if(err.code === 11000 && err.keyPattern.email == true) 
            throw new GraphQLError("Email already taken", {
              extensions: {
                code: 'DUPLICATED',
                http: { status: 409 },
              }
            })
          else if(err.code === 11000 && err.keyPattern.number == true) 
            throw new GraphQLError("Number already taken", {
              extensions: {
                code: 'DUPLICATED',
                http: { status: 409 },
              }
            })
          else throw err;
        });
    },
  },
};
