
export const email_password_check = async (data) => {
    console.log(data);
}

export const firstname_lastname_check = async (data) => {
    console.log(data);
}

export const moreInformation_check = async (data) => {
    console.log(data);
}

export const coach_check = async (data) => {
    console.log(data);
}

export const goals_check = async (data) => {
    console.log(data);
}













export const finaly_verification_signUp = async (data) => {
    console.log(data);

    for (const index in data) {
        if (data[index] === "") {
            return {false: "Everything is required"};
        }
    }
    return {true: "All good"};
}