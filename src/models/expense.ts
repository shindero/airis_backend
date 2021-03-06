import { Schema, model } from "mongoose";
import { IExpense } from "../types/expense";

const ExpenseSchema = new Schema<IExpense>({
  cost: {
    type: Number,
    required: [true, 'Cost field is required'],
  },
  date: {
    type: Date,
    required: [true, 'Date field is required'],
  },
  merchantName: {
    type: String,
    required: [true, 'Merchant field is required'],
  },
  description: {
    type: String,
    required: [true, 'Description field is required'],
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'category',
    required: [true, 'Category is required'],
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'product',
    required: [true, 'At least one product is required']
  }],
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'User is required'],
  }
})

const expense = model('expense', ExpenseSchema);
export default expense;