import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, 'E-mail already exists'],
      required: [true, 'E-mail is required'],
    },
    userName: {
      type: String,
      required: [true, 'UserName is required'],
    },
    image: {
      type: String,
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Property',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = models.user || model('User', UserSchema);

export default User;
