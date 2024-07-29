import { supabase } from '../lib/supabase';

/**
 * 
 * @param {*} inputData 
 * @returns 
 *  true: All good
 *  false: Une erreur est survenue lors de la connexion
 */
export const email_password_check = async (inputData) => {
    if (inputData.mail === "" && inputData.password === "") {
        return { false: "Tous les champs sont requis" };
    }
    if (inputData.mail.includes("@") == false || inputData.mail.includes(".") == false) {
        return { false: "L'adresse mail est invalide" };
    }

    if (inputData.password.length < 8) {
        return { false: "Le mot de passe doit contenir au moins 8 caractères" };
    }

    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('mail', inputData.mail)

    if (error) {
        console.log(error);
        return { false: "Une erreur est survenue lors de la connexion" };
    }

    if (data.length > 0) {
        return { false: "Cet email est déjà utilisé" };
    }
    return { true: "All good" };
}

/**
 * 
 * @param {*} inputData
 * @returns
 *  true: All good
 *  false: Une erreur est survenue lors de la connexion
 */
export const firstname_lastname_check = async (inputData) => {

    if (inputData.firstname === "" || inputData.lastname === "") {
        return { false: "Tous les champs sont requis" };
    }

    if (inputData.lastname.length < 2) {
        return { false: "Le nom doit contenir au moins 2 caractères" };
    }

    if (inputData.firstname.length < 2) {
        return { false: "Le prénom doit contenir au moins 2 caractères" };
    }

    return { true: "All good" };
}

/**
 * 
 * @param {*} inputData
 * @returns
 *  true: All good
 *  false: 
 */
export const moreInformation_check = async (inputData) => {
    if (inputData.gender === "" || inputData.hight === "" || inputData.weight === "") {
        return { false: "Tous les champs sont requis" };
    }

    if (inputData.gender !== "Male" && inputData.gender !== "Female") {
        return { false: "Le sexe doit être 'Male' ou 'Female'" };
    }

    if (isNaN(inputData.hight)) {
        return { false: "La taille n'es pas valide" };
    }
    if (isNaN(inputData.weight)) {
        return { false: "Le poids n'es pas valide" };
    }

    return { true: "All good" };
}

/**
 * 
 * @param {*} inputData
 * @returns
 *  true: All good
 *  false: Tous les champs sont requis
 */
export const trainingVolume_check = async (inputData) => {
    if (inputData.trainingVolume === "") {
        return { false: "Tous les champs sont requis" };
    }

    return { true: "All good" };
}   


/**
 * 
 * @param {*} inputData
 * @returns
 *  true: All good
 *  false: Une erreur est survenue lors de la connexion
 */
export const coach_check = async (inputData) => {
    if (inputData.coach_mode === "") {
        return { false: "Tous les champs sont requis" };
    }
    return { true: "All good" };
}

/**
 * 
 * @param {*} inputData
 * @returns
 *  true: All good
 *  false: Une erreur est survenue lors de la connexion
 */
export const goals_check = async (inputData) => {
    if (inputData.goal === "") {
        return { false: "le champs objectif est requis" };
    }
    if (inputData.goal === "P") {
        if (inputData.sport === "") {
            return { false: "le champs sport est requis" };
        }
        if (inputData.distance === "") {
            return { false: "le champs distance est requis" };
        }
        if (inputData.type === "") {
            return { false: "le champs type est requis" };
        }
    }
    return { true: "All good" };
}

/**
 * 
 * @param {*} inputData
 * @returns
 *  true: All good
 *  false: Une erreur est survenue lors de la connexion
 */
export const finaly_verification_signUp = async (inputData) => {

    if (inputData.date === "" && inputData.goal === "P") {
        return { false: "Le champs date est requis" };
    }

    if (inputData.goal === "P") {
        const actualDate = new Date();

        if (inputData.date < actualDate) {
            return { false: "La date doit être dans le futur" };
        }
    }


    const { data: { session }, error } = await supabase.auth.signUp({
        email: inputData.mail,
        password: inputData.password,
    })

    if (error) return { false: error.message };

    const { data: insertedData, error: insertedError } = await supabase
        .from('users')
        .insert([{
            session_id: session['user']['id'],
            mail: inputData.mail,
            lastName: inputData.lastname || "",
            firstName: inputData.firstname || "",
            gender: inputData.gender || "",
            weight_kg: inputData.weight || "",
            height_cm: inputData.hight || "",
            coach_mode: inputData.coach_mode || "",
            goal: inputData.goal || "",
            goal_distance_km: inputData.distance || "",
            goal_type: inputData.type || "",
            goal_sport: inputData.sport || "",
            goal_date: inputData.date || null,

        }]
        )

    if (insertedError) {
        return { false: insertedError.message };
    }

    return { true: "All good" };
}

export const skip_signUp = async (inputData) => {
    const { data: { session }, error } = await supabase.auth.signUp({
        email: inputData.mail,
        password: inputData.password,
    })

    if (error) return { false: error.message };

    const { data: insertedData, error: insertedError } = await supabase
        .from('users')
        .insert([{
            session_id: session['user']['id'],
            mail: inputData.mail,
            lastName: inputData.lastname,
            firstName: inputData.firstname,
            gender: inputData.gender || "",
            weight_kg: inputData.weight || "",
            height_cm: inputData.hight || "",
            coach_mode: inputData.coach_mode || "",
            goal: inputData.goal || "",
            goal_distance_km: inputData.distance || "",
            goal_type: inputData.type || "",
            goal_sport: inputData.sport || "",
            goal_date: inputData.date || null,
        }]
        )

    if (insertedError) {
        return { false: insertedError.message };
    }

    return { true: "All good" };
}