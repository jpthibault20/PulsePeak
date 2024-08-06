import { supabase } from '../lib/supabase'

export const reportBug = async (props) => {

    if (!props.user) {
        return { error: "Erreur utilisateur non trouvé" };
    }

    if (!props.TextInput || props.TextInput.length === 0) {
        return { error: "Pas de message" };
    }

    const { data, error } = await supabase
        .from('reportBug')
        .insert([
            {
                userFirstName: props.user.firstName,
                userLastName: props.user.lastName,
                userID: props.user.id,
                message: props.TextInput
            }
        ]);

    if (error) {
        console.log("Err : ", error.message);
        return { error: error.message };
    }
    return { success: data };
}