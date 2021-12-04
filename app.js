// Collect Blood Group
let blood = prompt(` Type Blood Group : [ O+ , O- , A+ , A- , B+ , B- , AB+ , AB- ] `);
//Collect Loocation
let address = prompt(`Type Loocation : [ CTG , Kurigram , Cumilla , Dhaka , Bhola ]`);

// Blood Group App OutPut

if (blood == "" && address == "") {     

    alert(` Plzz Fill In The Gapp `)
    console.log(` Fille Not Found 😥 `);

} else {

    for (let a = 0; a < bloodGroup.length; a++) {

        if (bloodGroup[a][1] == address && bloodGroup[a][2] == blood) {

            bloodGroup[a].forEach(function (data) {
                console.log(data);
            })
            console.log( '------------------------------------------------' );

        } else if (bloodGroup[a][2] == blood && address == "") {

            if (bloodGroup[a][2] == blood) {

                bloodGroup[a].forEach(function (data) {
                    console.log(data);
                })
                console.log( '------------------------------------------------' );

            }

        } else if (bloodGroup[a][1] == address && blood == "") {

            if (bloodGroup[a][1] == address) {

                bloodGroup[a].forEach(function (data) {
                    console.log(data);
                })
                console.log( '------------------------------------------------' );

            }

        }
    }
}