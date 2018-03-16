import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;


const groupTempSchema = new Schema({
   name: {
      type: String,
      required: [true, 'name is required']
   },
   address: {
      type: String,
      required: [true, 'address is required']
   }
})

const GroupSchema = mongoose.model('group', groupTempSchema);
export default GroupSchema;
