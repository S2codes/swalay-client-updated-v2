import mongoose, { Document, Schema } from "mongoose";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export enum PaymentStatus {
  //eslint-disable @typescript-eslint/no-unused-vars
  PENDING = "PENDING",
  //eslint-disable @typescript-eslint/no-unused-vars
  APPROVED = "APPROVED",
  //eslint-disable @typescript-eslint/no-unused-vars
  FAILED = "FAILED",
  //eslint-disable @typescript-eslint/no-unused-vars
  REJECTED = "REJECTED",
}

interface IPaymentRequest extends Document {
  labelId: string;
  amount: number;
  request_at: Date;
  update_at: Date;
  status: PaymentStatus;
  comment?: string;
}

const PaymentRequestSchema: Schema = new Schema({
  labelId: { type: String, required: true },
  amount: { type: Number, required: true },
  request_at: {
    type: Date,
    default: Date.now(),
  },
  update_at: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    default: PaymentStatus.PENDING,
    enum: Object.values(PaymentStatus),
    required: true,
  },
  comment: { type: String },
});

const PaymentRequest =
  mongoose.models.PaymentRequest ||
  mongoose.model<IPaymentRequest>("PaymentRequest", PaymentRequestSchema);

export default PaymentRequest;
