drewno_max = document.getElementById("wood");
glina_max = document.getElementById("clay");
zelazo_max = document.getElementById("iron");
pikinier = [50,30,10];
miecznik = [30,30,70];
var a=0;
var b;
function count()
{
    // do{ 
    //     do {
    //         total_drewno = pik_test_ilu * pikinier[0] + miecz_test_ilu * miecznik[0];
    //         total_glina = pik_test_ilu * pikinier[1] + miecz_test_ilu * miecznik[1];
    //         total_zelazo = pik_test_ilu * pikinier[2] + miecz_test_ilu * miecznik[2];
    //         if (pik_test_ilu+miecz_test_ilu>ile_zolniezy_kupic || total_drewno <= drewno_max || total_glina <= glina_max || total_zelazo <= zelazo_max){
    //             ile_pik_kupic = pik_test_ilu;
    //             ile_miecz_kupic = miecz_test_ilu;
    //             ile_zolniezy_kupic= pik_test_ilu + miecz_test_ilu}
    //     }while (miecz_test_ilu < 500);
    // }while (pik_test_ilu < 500);
    a++;
    document.getElementById('demo').textContent = a;
}

function getValue(){
    console.log("siema");
}

document.getElementById('do-count').onclick = count;
document.getElementById('do-getValue').onclick = getValue;
