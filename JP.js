function CalculateQuoteRes(val)
                    {
                var res1, res2, service, coef, lift, price, installrate, matres, installres;
                res1=Number(document.formres.res1.value);
                res2=Number(document.formres.res2.value);

                        if (document.formres.radio_res[0].checked == true) {
        service = "7565";
    }
    else if (document.formres.radio_res[1].checked == true) {
        service = "12345";
    }
    else if (document.formres.radio_res[2].checked == true) {
        service = "15400";
    }
    else {
        // DO NOTHING
        }
                               if (res2<20) {
                coef = "1";
                    } else {
                            coef = "2";
                    }

                        if (document.formres.radio_res[0].checked == true) {
        installrate = "0.1";
    }
    else if (document.formres.radio_res[1].checked == true) {
        installrate = "0.13";
    }
    else if (document.formres.radio_res[2].checked == true) {
        installrate = "0.16";
    }
    else {
        // DO NOTHING
        }

                        if (document.formres.radio_res[0].checked == true) {
        price = "7565";
    }
    else if (document.formres.radio_res[1].checked == true) {
        price = "12345";
    }
    else if (document.formres.radio_res[2].checked == true) {
        price = "15400";
    }
    else {
        // DO NOTHING
        }

                        document.formres.price_res.value="$"+price+" per elevator";


                lift=Math.ceil((res1/res2)/6)*coef;
                matres=Math.ceil((res1/res2)/6)*coef*service;
                installres=matres*installrate;
                document.formres.material_res.value="$"+matres+" for material";
                document.formres.install_res.value="$"+Math.ceil(installres)+" for installation";
                document.formres.total_res.value="$"+Math.ceil(matres+installres)+" Total Budget";

                        if(document.formres.material_res.value === "$NaN for material")
  {
    alert("Nice Try! Please make sure to fill all the fields above before choosing a product range. Try Again!");
    return false;
  }
    return true;

               }
function calculateRes(val)
{
    var res1, res2, coef, lift;
                res1=Number(document.formres.res1.value);
                res2=Number(document.formres.res2.value);

                coef=Math.ceil(res2/20);
                lift=Math.ceil((res1/res2)/6)*coef;
    document.formres.lift_res.value=lift+" elevators proposed";
}
