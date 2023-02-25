import uuid from "react-native-uuid"

export function generateUUID():string{
    return String(uuid.v4())
}
