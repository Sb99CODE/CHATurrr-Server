import mongoose, { Schema, model, Types } from "mongoose";

const schema = new Schema(
  {
    creator: {
      type: Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    groupChat: {
      type: Boolean,
      default: false, 
    },
    members: [
      {
        type: Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Chat =mongoose.models.Chat || model("Chat", schema);
