import db from "../config/db.js";

const Schema = db.Schema;

const speciesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    discoveryLocation: {
        type: String,
        required: true
    },
    rarity: {
        type: Number,
        min: 1,
        max: 10,
        required: true
    },
    documented:{
        type: Boolean,
        required: true
    }
})

const Species = db.model("Species", speciesSchema);
export default Species