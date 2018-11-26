// Help a paramedic save a life! A person is unconscious and the medic needs to perform CPR. The whole process lasts one minute. Every second he has to massage the patient's heart (console.log(“performing insertAction”);). Every 15-th second he has to check his pulse and at the end of the process, he needs to declare the patient dead or alive.


function medicalHelp() {
    var time = 60;
    for (let i = 1; i < time; i++) {
        if (time - 1 == i) {
            console.log("pacient is alive");
        } else {
            var min = i;
            console.log("performing insertAction");
            if (min % 15 === 0) {
                console.log("check his pulse");
            }
        }
    }
}

medicalHelp();