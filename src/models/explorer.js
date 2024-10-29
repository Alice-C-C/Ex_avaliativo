import db from "../config/db.js";

const Schema = db.Schema;

const explorerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    fieldOfStudy: {
        type: String,
        required: true
    },
    expeditionsParticipated: {
        type: Number,
        default:0
    }
})

const Explorer = db.model("Explorer", explorerSchema);
export default Explorer