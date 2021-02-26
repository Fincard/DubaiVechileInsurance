baseurl = 'http://localhost:13890';

//baseurl = 'http://128.84.4.155:8089';
//document.getElementsById("superuser").style.visibility = "hidden";
function loaddata(data) {
    /*data = JSON.stringify(data);*/
    $.each(data, function (key, val) {
        lsppInsert        //key = key.replace("db_", "vm_");
        //	alert(key+'='+val);
        var $el = $('[name="' + key + '"]'),
            type = $el.attr('type');
        /*	console.log(key+'--'+val+'--'+$el+'--'+type+'\n'); */
        switch (type) {
            case 'checkbox':
                $el.attr('checked', 'checked');
                break;
            case 'radio':
                $el.filter('[value="' + val + '"]').attr('checked', 'checked');
                break;
            default:
                $el.val(val);
        }

    });
}
$("#Userbar").hide();
$("#logout").hide();
// Role base page show
var role = localStorage.getItem("Roleid");
if (role == 4) {
    $("#Userbar").show();
}

if (role != null) {
    $("#login").hide();
    $("#logout").show();
}
$("#logout").click(function(){
    localStorage.clear();
});

// Group Page
function groupInsert() {
    $.ajax(
        {
            type: "POST",
            url: baseurl + "/api/InsertGroup/Insert",
            data: $("#usergroup").serialize(),
            crossDomain: "true",
            success: function (data) {
                console.log(data);
                swal.fire({
                    text: "Group Insert successfully",
                    icon: "success",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    confirmButtonClass: "btn font-weight-bold btn-light-primary"
                }).then(function () {
                    location.reload();
                });
            },
            error: function (data) {
                swal.fire({
                    text: "Sorry, Group Insert Unsuccessfully ",
                    icon: "error",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    confirmButtonClass: "btn font-weight-bold btn-light"
                }).then(function () {

                });
            },
            dataType: "json"
        });
}
function groupView() {
    $.ajax(
        {
            type: "GET",
            cache: false,
            crossDomain: "true",
            url: baseurl + "/api/GetGroup/list",
            beforeSend: function () {
                $("#divResult").html("<tr><td colspan='5'> Loading!</td> </tr>");
            },
            success: function (data) {
                grouplist(data);
            },
            dataType: "json"
        });
}
function grouplist(list) {
    grdGetEnquiry = '';
    $.each(list, function (index, item) {
        grdGetEnquiry += "<tr> <td>" + item.ID + "</td> <td><span>" + item.P_Groupname + "</span></td><td>" + item.Is_Active + "</td><td><a class='btn btn-primary mr-2' href='#" + item.ID + "'>Delete</a>";
    });
    $("#divResult").html(grdGetEnquiry);
}
// End
// Distribution drpdown
function drpDist() {
    $.ajax(
        {
            type: "GET",
            cache: false,
            url: baseurl + "/api/GetPolicyList/list",
            crossDomain: true,
            dataType: "json",
            success: function (data) {
                console.log(data);
                buildDistdrp(data);
            },

        });
}
function buildDistdrp(list) {
    var strResult = '<option value = "" > --Select--</option>';
    $.each(list, function (index, item) {
        strResult += "<option value='" + item.P_Policyname + "'>" + item.P_Policyname + "</option>";
    });
    $("#P_Policyname").html(strResult);
}
//End
// Product type
function productInsert() {
    $.ajax(
        {
            type: "POST",
            url: baseurl + "/api/InsertProducttype/Insert",
            data: $("#producttype").serialize(),
            crossDomain: "true",
            success: function (data) {
                console.log(data);
                swal.fire({
                    text: "Product Type successfully",
                    icon: "success",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    confirmButtonClass: "btn font-weight-bold btn-light-primary"
                }).then(function () {
                    location.reload();
                });
            },
            error: function (data) {
                swal.fire({
                    text: "Sorry, Product Type  Unsuccessfully ",
                    icon: "error",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    confirmButtonClass: "btn font-weight-bold btn-light"
                }).then(function () {

                });
            },
            dataType: "json"
        });
}
function productView() {
    $.ajax(
        {
            type: "GET",
            cache: false,
            crossDomain: "true",
            url: baseurl + "/api/Getproduct/list",
            beforeSend: function () {
                $("#divResult").html("<tr><td colspan='5'> Loading!</td> </tr>");
            },
            success: function (data) {
                console.log(data);
                productlist(data);
            },
            dataType: "json"
        });
}
function productlist(list) {
    grdGetEnquiry = '';
    $.each(list, function (index, item) {
        grdGetEnquiry += "<tr><td>" + item.ID + "</td> <td><span>" + item.P_ProductTypeName + "</span></td><td>" + item.P_BenefitCode + "</td><td>" + item.P_ReferenceNo + "</td>";
    });
    $("#divResult").html(grdGetEnquiry);
}
//End
// Product type drp
function drpproductype() {
    $.ajax(
        {
            type: "GET",
            cache: false,
            url: baseurl + "/api/GetProductTypeCode/list",
            crossDomain: true,
            dataType: "json",
            success: function (data) {
                console.log(data);
                buildProducttypedrp(data);
            },

        });
}
function buildProducttypedrp(list) {
    var strResult = '<option value = "" > --Select--</option>';
    $.each(list, function (index, item) {
        strResult += "<option value='" + item.P_BenefitCode + "'>" + item.P_ProductTypeName + "</option>";
    });
    $("#P_Code").html(strResult);
}
//
// Product benifit
function productbeniftInsert() {
    $.ajax(
        {
            type: "POST",
            url: baseurl + "/api/InsertProductMaster/Insert",
            data: $("#productbenift").serialize(),
            crossDomain: "true",
            success: function (data) {
                console.log(data);
                swal.fire({
                    text: "Product Benifit successfully",
                    icon: "success",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    confirmButtonClass: "btn font-weight-bold btn-light-primary"
                }).then(function () {
                    location.reload();
                });
            },
            error: function (data) {
                swal.fire({
                    text: "Sorry, Product Benifit  Unsuccessfully ",
                    icon: "error",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    confirmButtonClass: "btn font-weight-bold btn-light"
                }).then(function () {

                });
            },
            dataType: "json"
        });
}
// End
// Vechile makedrp
// Vechile make dropdown
function getvechilemake() {
    $.ajax(
        {
            type: "GET",
            cache: false,
            url: baseurl + "/api/VechileMake/list",
            crossDomain: true,
            dataType: "json",
            success: function (data) {
                buildvechilemakesdrp(data);
            },

        });
}
function buildvechilemakesdrp(list) {
    var strResult = '<option value = "" > --Select--</option>';
    $.each(list, function (index, item) {
        strResult += "<option value='" + item.VechilemMakeID + "'>" + item.VechileMakeName + "</option>";
    });
    $("#VehicleMake").html(strResult);
}
// On change for Vechile make
function getvechilemodel(makeid) {
    var id = makeid.value;
    $.ajax(
        {
            type: "GET",
            cache: false,
            url: baseurl + "/api/VechileModel/list?vechiletypeid=2&vechilemakeid=" + id,
            crossDomain: true,
            dataType: "json",
            success: function (data) {
                buildvechilemodeldrp(data);
            },

        });
}
function buildvechilemodeldrp(list) {
    var strResultt = '<option value = "" > --Select--</option>';
    $.each(list, function (index, item) {
        strResultt += "<option value='" + item.VechilemodelId + "'>" + item.VechileModelName + "</option>";
    });
    $("#VechilemodelId").html(strResultt);
}
// End
// IDV calculation
function InsertcustomerVechineData() {
   // var data = new FormData();
    var ModelYear =$('#ModelYear option:selected').val();
    var VechilemodelId = $('#VechilemodelId option:selected').val();
    var NCB = $('#NCB option:selected').val();
    var vechileamount = $('#Vechileamount').val();
    console.log(vechileamount);
    if (vechileamount == "" || vechileamount == null)
    {
        vechileamount = "0";
    }
    $.ajax(
        {
            type: "POST",
            url: baseurl + "/api/IDV/list?modelyear="+ModelYear+"&VechilemodelId="+VechilemodelId+"&NCB="+NCB+"&vechileamount="+vechileamount,
            crossDomain: "true",
            success: function (data) {
                console.log(data);
                buildIDVvalue(data);
            },
            error: function (data) {
            },
            dataType: "json"

        });
}
function buildIDVvalue(data) {
    $("#kt_nouislider_1_input").val(data[0].IDV);
    slider(data[0].minvalue, data[0].Maxvalue)
    //document.getElementById('kt_nouislider').innerHTML = data[0].IDV;
   // document.getElementById('kt_nouislider_1').innerHTML = data[0].IDV;
    //document.getElementById('kt_nouislider_1').innerHTML = data[0].IDV;
}
//End
// Vechile Registration
function VechileInsert() {
    $.ajax(
        {
            type: "POST",
            url: baseurl + "/api/User/Insertuser",
            data: $("#motorregster").serialize(),
            crossDomain: "true",
            success: function (data) {
                console.log(data);
                swal.fire({
                    text: "Motor Registration submited successfully",
                    icon: "success",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    confirmButtonClass: "btn font-weight-bold btn-light-primary"
                }).then(function () {
                    location.href = '#/mtquo/'+data[0].QuotationId;
                  
                });
            },
            error: function (data) {
                console.log(data);
                swal.fire({
                    text: "Sorry, Motor Registration submited Unsuccessfully ",
                    icon: "error",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    confirmButtonClass: "btn font-weight-bold btn-light"
                }).then(function () {

                });
            },
            dataType: "json"
        });
}
function getQuoteInfo(ID) {
    $.ajax(
        {
            type: "POST",
            url: baseurl + "/api/GetQuotation/list?QuotationId="+ID,
            crossDomain: "true",
            success: function (data) {
               // console.log(data);
                datassign(data);
                
            },
            error: function (data) {
              
            },
            dataType: "json"
        });
}
function datassign(da) {
    document.getElementById('customeraddress').innerHTML = da[0].EmailAddress;
    document.getElementById('quotationno').innerHTML = da[0].QuotationId;
    document.getElementById('Premium').innerHTML = da[0].TotalPremium;
    document.getElementById('CustomerName').innerHTML = da[0].CustomerName;
    if (da[0].ComprehensiveCover == true) {
        document.getElementById('comrecover').innerHTML = "Yes";
    }
    else {
        document.getElementById('comrecover').innerHTML = "No";
    }
    //
    if (da[0].ThirdPartyCover == true) {
        document.getElementById('thrparty').innerHTML = "Yes";
    }
    else {
        document.getElementById('thrparty').innerHTML = "No";
    }
    //
    if (da[0].Thirdpartypropertydamage == true) {
        document.getElementById('thrdamage').innerHTML = "Yes";
    }
    else {
        document.getElementById('thrdamage').innerHTML = "No";
    }
    //
    if (da[0].GeographicalcoverUAEonly == true) {
        document.getElementById('geouae').innerHTML = "Yes";
    }
    else {
        document.getElementById('geouae').innerHTML = "No";
    }
    //
    if (da[0].PersonalAccidentforDriver == true) {
        document.getElementById('personlacc').innerHTML = "Yes";
    }
    else {
        document.getElementById('personlacc').innerHTML = "No";
    }
    //
    if (da[0].PersonalAccidentforPassengers == true) {
        document.getElementById('personalacc').innerHTML = "Yes";
    }
    else {
        document.getElementById('personalacc').innerHTML = "No";
    }
    //
    if (da[0].Roadsideassistance == true) {
        document.getElementById('roadside').innerHTML = "Yes";
    }
    else {
        document.getElementById('roadside').innerHTML = "No";
    }
    //
    if (da[0].ReplacementCarSmall == true) {
        document.getElementById('replacementcarsmall').innerHTML = "Yes";
    }
    else {
        document.getElementById('replacementcarsmall').innerHTML = "No";
    }
    //
    if (da[0].ReplacementCarMedium == true) {
        document.getElementById('replacementcarmedium').innerHTML = "Yes";
    }
    else {
        document.getElementById('replacementcarmedium').innerHTML = "No";
    }
    //
    if (da[0].ReplacementCarLarge == true) {
        document.getElementById('replacementcarlarge').innerHTML = "Yes";
    }
    else {
        document.getElementById('replacementcarlarge').innerHTML = "No";
    }
    //
    if (da[0].GeographicalExtensionOman == true) {
        document.getElementById('georaphical').innerHTML = "Yes";
    }
    else {
        document.getElementById('georaphical').innerHTML = "No";
    }
    //
    if (da[0].NaturaHazzards == true) {
        document.getElementById('naturahazard').innerHTML = "Yes";
    }
    else {
        document.getElementById('naturahazard').innerHTML = "No";
    }
    //
    if (da[0].Windshield == true) {
        document.getElementById('Windshield').innerHTML = "Yes";
    }
    else {
        document.getElementById('Windshield').innerHTML = "No";
    }
    if (da[0].Medicalexpense == true) {
        document.getElementById('Medical').innerHTML = "Yes";
    }
    else {
        document.getElementById('Medical').innerHTML = "No";
    }
    if (da[0].Personalbelongings == true) {
        document.getElementById('Personal').innerHTML = "Yes";
    }
    else {
        document.getElementById('Personal').innerHTML = "No";
    }
    
























}
// End
function IDVchange(idv){
    var ModelYear = $('#ModelYear option:selected').val();
    var VechilemodelId = $('#VechilemodelId option:selected').val();
    var NCB = $('#NCB option:selected').val();
    //var vechileamount = $('#Vechileamount').val();
    //console.log(vechileamount);
    //if (vechileamount == "" || vechileamount == null) {
    //    vechileamount = "0";
    //}
    $.ajax(
        {
            type: "POST",
            url: baseurl + "/api/IDV/list?modelyear=" + ModelYear + "&VechilemodelId=" + VechilemodelId + "&NCB=" + NCB + "&vechileamount=" + idv,
            crossDomain: "true",
            success: function (data) {
                console.log(data);
               // buildIDVvalue(data);
            },
            error: function (data) {
            },
            dataType: "json"

        });
}

function paynow(ID) {
    $.ajax(
       {
           type: "POST",
           url: baseurl + "/api/InsertPolicy/Insert?QuotationId="+ID,
           crossDomain: "true",
           success: function (data) {
               console.log(data);
               swal.fire({
                   text: "Policy Generated successfully",
                   icon: "success",
                   buttonsStyling: false,
                   confirmButtonText: "Ok, got it!",
                   confirmButtonClass: "btn font-weight-bold btn-light-primary"
               }).then(function () {
                   location.href = '#/mtpolicy/' + data;
                   //  location.reload();
               });
           },
           error: function (data) {
               swal.fire({
                   text: "Sorry, Motor Registration submited Unsuccessfully ",
                   icon: "error",
                   buttonsStyling: false,
                   confirmButtonText: "Ok, got it!",
                   confirmButtonClass: "btn font-weight-bold btn-light"
               }).then(function () {

               });
           },
           dataType: "json"
       });
}

function getpolicynum(num) {
    $.ajax(
      {
          type: "POST",
          url: baseurl + "/api/GetPolicyno/list?vechilenumber=" + num,
          crossDomain: "true",
          success: function (data) {
              $("#Policynumber").val(data[0].Policynumber);
          },
          error: function (data) {
             
          },
          dataType: "json"
      });
}

function ClaimInsert() {
    console.log($("#claimrreg").serialize());
    $.ajax(
     {
         type: "POST",
         url: baseurl + "/api/InsertClaim/Insert",
         data: $("#claimrreg").serialize(),
         crossDomain: "true",
         success: function (data) {
             console.log(data);
             swal.fire({
                 text: "Claim Generated successfully",
                 icon: "success",
                 buttonsStyling: false,
                 confirmButtonText: "Ok, got it!",
                 confirmButtonClass: "btn font-weight-bold btn-light-primary"
             }).then(function () {
                 // location.href = '#/mtquo/:' + data[0].QuotationId;
                 //  location.reload();
             });
         },
         error: function (data) {
             swal.fire({
                 text: "Sorry, Claim submited Unsuccessfully ",
                 icon: "error",
                 buttonsStyling: false,
                 confirmButtonText: "Ok, got it!",
                 confirmButtonClass: "btn font-weight-bold btn-light"
             }).then(function () {

             });
         },
         dataType: "json"
     });
}
function slider(min,max) {

    var MotorSlider = function () {

        // Private functions
        var demo1 = function () {
            // init slider
            var slider = document.getElementById('kt_nouislider_1');

            noUiSlider.create(slider, {
                start: [min],
                step: 2,
                range: {
                    'min': [min],
                    'max': [max]
                },
                format: wNumb({
                    decimals: 0
                })
            });

            // init slider input
            var sliderInput = document.getElementById('kt_nouislider_1_input');

            slider.noUiSlider.on('update', function (values, handle) {
                sliderInput.value = values[handle];
            });

            sliderInput.addEventListener('change', function () {
                slider.noUiSlider.set(this.value);
            });
        }

        return {
            // public functions
            init: function () {
                demo1();
            }
        };
    }();

    jQuery(document).ready(function () {
        MotorSlider.init();
    });
}

function getpolicyInfo(ID) {
    $.ajax(
        {
            type: "POST",
            url: baseurl + "/api/GetPolicymotor/list?policynumber=" + ID,
            crossDomain: "true",
            success: function (data) {
                console.log(data);
                policydatassign(data);

            },
            error: function (data) {

            },
            dataType: "json"
        });
}
function policydatassign(da) {
    document.getElementById('customeraddress').innerHTML = da[0].EmailAddress;
    document.getElementById('policyno').innerHTML = da[0].PolicyNumber;
    document.getElementById('TPremium').innerHTML = da[0].TotalPremium;
    document.getElementById('CustomerName').innerHTML = da[0].CustomerName;
    document.getElementById('polynum').innerHTML = da[0].PolicyNumber;

    document.getElementById('policytype').innerHTML = da[0].PrevPolType;
    document.getElementById('frmdate').innerHTML = moment(da[0].InsExpDate_rtxtDate).utc().format('YYYY-MM-DD')
    document.getElementById('todate').innerHTML =  moment(da[0].InsExpDate_rtxtDate).utc().format('YYYY-MM-DD');
    document.getElementById('insuredname').innerHTML = da[0].CustomerName;
    document.getElementById('polprem').innerHTML = da[0].NetPremium;
    document.getElementById('mobile').innerHTML = da[0].MobileNo;
    document.getElementById('city').innerHTML = da[0].city;

    document.getElementById('body').innerHTML = da[0].BodyTypename;
    document.getElementById('color').innerHTML = da[0].color;
    document.getElementById('carmodel').innerHTML = da[0].VechileModelName;
    document.getElementById('modelyear').innerHTML = da[0].modelyear;
    document.getElementById('regno').innerHTML = da[0].Vehiclenumber;
    document.getElementById('seat').innerHTML = da[0].NumberofPassengers;
    document.getElementById('chassisno').innerHTML = da[0].ChassissNo;
    document.getElementById('engno').innerHTML = da[0].EngineCapacity;
    document.getElementById('idv').innerHTML = da[0].IDV;
    document.getElementById('insname').innerHTML = da[0].CustomerName;
    document.getElementById('netprem').innerHTML = da[0].NetPremium;
    document.getElementById('TPremium').innerHTML = da[0].TotalPremium;
    document.getElementById('incove').innerHTML = da[0].PolicyNumber;
    document.getElementById('useofvech').innerHTML = "Private Vehicle";
    

    







    //if (da[0].ComprehensiveCover == true) {
    //    document.getElementById('comrecover').innerHTML = "Yes";
    //}
    //else {
    //    document.getElementById('comrecover').innerHTML = "No";
    //}
    ////
    //if (da[0].ThirdPartyCover == true) {
    //    document.getElementById('thrparty').innerHTML = "Yes";
    //}
    //else {
    //    document.getElementById('thrparty').innerHTML = "No";
    //}
    ////
    if (da[0].Thirdpartypropertydamage == true) {
        document.getElementById('thrdamage').innerHTML = "Yes";
    }
    else {
        document.getElementById('thrdamage').innerHTML = "No";
    }
    //
    if (da[0].GeographicalcoverUAEonly == true) {
        document.getElementById('geouae').innerHTML = "Yes";
    }
    else {
        document.getElementById('geouae').innerHTML = "No";
    }
    //
    if (da[0].PersonalAccidentforDriver == true) {
        document.getElementById('personlacc').innerHTML = "Yes";
    }
    else {
        document.getElementById('personlacc').innerHTML = "No";
    }
    //
    if (da[0].PersonalAccidentforPassengers == true) {
        document.getElementById('personalacc').innerHTML = "Yes";
    }
    else {
        document.getElementById('personalacc').innerHTML = "No";
    }
    //
    if (da[0].Roadsideassistance == true) {
        document.getElementById('roadside').innerHTML = "Yes";
    }
    else {
        document.getElementById('roadside').innerHTML = "No";
    }
    //
    if (da[0].ReplacementCarSmall == true) {
        document.getElementById('replacementcarsmall').innerHTML = "Yes";
    }
    else {
        document.getElementById('replacementcarsmall').innerHTML = "No";
    }
    //
    if (da[0].ReplacementCarMedium == true) {
        document.getElementById('replacementcarmedium').innerHTML = "Yes";
    }
    else {
        document.getElementById('replacementcarmedium').innerHTML = "No";
    }
    //
    if (da[0].ReplacementCarLarge == true) {
        document.getElementById('replacementcarlarge').innerHTML = "Yes";
    }
    else {
        document.getElementById('replacementcarlarge').innerHTML = "No";
    }
    //
    if (da[0].GeographicalExtensionOman == true) {
        document.getElementById('georaphical').innerHTML = "Yes";
    }
    else {
        document.getElementById('georaphical').innerHTML = "No";
    }
    //
    if (da[0].NaturaHazzards == true) {
        document.getElementById('naturahazard').innerHTML = "Yes";
    }
    else {
        document.getElementById('naturahazard').innerHTML = "No";
    }
    //
    if (da[0].Windshield == true) {
        document.getElementById('Windshield').innerHTML = "Yes";
    }
    else {
        document.getElementById('Windshield').innerHTML = "No";
    }
    if (da[0].Medicalexpense == true) {
        document.getElementById('Medical').innerHTML = "Yes";
    }
    else {
        document.getElementById('Medical').innerHTML = "No";
    }
    if (da[0].Personalbelongings == true) {
        document.getElementById('Personal').innerHTML = "Yes";
    }
    else {
        document.getElementById('Personal').innerHTML = "No";
    }
   }

function getClaimHO()
{
    $.ajax(
          {
              type: "GET",
              cache: false,
              crossDomain: "true",
              url: baseurl + "/api/GetclaimHO/list",
              beforeSend: function () {
                  $("#claimdivResult").html("<tr><td colspan='5'> Loading!</td> </tr>");
              },
              success: function (data) {
                  console.log(data);
                  dataclaimgrid(data);
              },
              dataType: "json"
          });
}
function dataclaimgrid(list) {
    grdGetEnquiry = '';
    $.each(list, function (index, item) {
        grdGetEnquiry += "<tr> <td>" + item.claimno + "</td> <td><span>" + item.Policynumber + "</span></td><td>" + item.amount + "</td><td>" + item.amount + "</td><td><a class='btn btn-primary btn-shadow-hover font-weight-bold mr-2' href='#/HOClaimupdate/" + item.claimno + "'>Update</a></td>";
            
    });
    $("#claimdivResult").html(grdGetEnquiry);
    $("#claimexp").DataTable({
        paging: false,
        //searching: false,
        "bDestroy": true,
        //dom: 'Bfrtip',
        buttons: [
           'copy', 'csv', 'excel', 'pdf']
    });
}
   
function getclamlist() {
    var userid = localStorage.getItem("P_UserID");
    $.ajax(
          {
              type: "POST",
              cache: false,
              crossDomain: "true",
              url: baseurl + "/api/Getclaimbyuserid/list?userid="+userid,
              beforeSend: function () {
                  $("#claimdivResult").html("<tr><td colspan='5'> Loading!</td> </tr>");
              },
              success: function (data) {
                  console.log(data);
                  datacustclaimgrid(data);
              },
              dataType: "json"
          });
}
function datacustclaimgrid(list) {
    grdGetEnquiry = '';
    $.each(list, function (index, item) {
        grdGetEnquiry += "<tr> <td>" + item.claimno + "</td> <td><span>" + item.Policynumber + "</span></td><td>" + item.amount + "</td><td>" + item.amount + "</td><td><a class='btn btn-primary btn-shadow-hover font-weight-bold mr-2' href='#/claimupdate/" + item.claimno + "'>Update</a></td>";

    });
    $("#claimdivResult").html(grdGetEnquiry);
    $("#claimexp").DataTable({
        paging: false,
        //searching: false,
        "bDestroy": true,
        //dom: 'Bfrtip',
        buttons: [
           'copy', 'csv', 'excel', 'pdf']
    });
}

function getpolicytrans() {
    var userid = localStorage.getItem("P_UserID");
    $.ajax(
          {
              type: "GET",
              cache: false,
              crossDomain: "true",
              url: baseurl + "/api/Getpolicybyuserid/list?userid="+userid,
              beforeSend: function () {
                  $("#divResult").html("<tr><td colspan='5'> Loading!</td> </tr>");
              },
              success: function (data) {
                  console.log(data);
                  datacusttransgrid(data);
              },
              dataType: "json"
          });
}
function datacusttransgrid(list) {
    grdGetEnquiry = '';
    $.each(list, function (index, item) {
        grdGetEnquiry += "<tr> <td>" + item.Policynumber + "</td> <td><span>" + item.TotalPremium + "</span></td><td>" + item.Vehiclenumber + "</td><td>" + item.amount + "</td><td><a class='btn btn-primary btn-shadow-hover font-weight-bold mr-2' href='#/mtpolicy/" + item.Policynumber + "'>Generate</a></td><td><a class='btn btn-primary btn-shadow-hover font-weight-bold mr-2 renew''>Renew</a></td>";

    });
    $("#divResult").html(grdGetEnquiry);
    $("#example").DataTable({
        paging: false,
        //searching: false,
        "bDestroy": true,
        //dom: 'Bfrtip',
        buttons: [
           'copy', 'csv', 'excel', 'pdf']
    });
    $('.renew').click(function () {
       
        swal.fire({
            text: "Thanks, Your Renewl Under Process",
            icon: "success",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            confirmButtonClass: "btn font-weight-bold btn-light-primary"
        }).then(function () {
        });
    });
}

function getClaimnum(num) {
   
    $.ajax(
          {
              type: "POST",
              cache: false,
              crossDomain: "true",
              url: baseurl + "/api/Getclaimbyno/list?claimno=" + num,
              beforeSend: function () {
                  $("#claimdivResult").html("<tr><td colspan='5'> Loading!</td> </tr>");
              },
              success: function (data) {
                  console.log(data);
                  loaddata(data[0]);
                  $("#surveydate").val(moment(data[0].surveydate).utc().format('YYYY-MM-DD'))
              },
              dataType: "json"
          });
}

// Agent
function getpolicyagenttrans(AGID) {
    
    $.ajax(
          {
              type: "POST",
              cache: false,
              crossDomain: "true",
              url: baseurl + "/api/Getpolicybyagent/list?agentId=" + AGID,
              beforeSend: function () {
                  $("#divResult").html("<tr><td colspan='5'> Loading!</td> </tr>");
              },
              success: function (data) {
                  console.log(data);
                 dataagenttransgrid(data);
              },
              dataType: "json"
          });
}
function dataagenttransgrid(list) {
    grdGetEnquiry = '';
    $.each(list, function (index, item) {
        grdGetEnquiry += "<tr> <td>" + item.Policynumber + "</td> <td><span>" + item.TotalPremium + "</span></td><td>" + item.Vehiclenumber + "</td><td>" + moment(item.amount).utc().format('YYYY-MM-DD') + "</td><td><a class='btn btn-primary btn-shadow-hover font-weight-bold mr-2' href='#/mtpolicy/" + item.Policynumber + "'>Generate</a></td><td><a class='btn btn-primary btn-shadow-hover font-weight-bold mr-2 renew''>Renew</a></td>";

    });
    $("#divResult").html(grdGetEnquiry);
    $("#example").DataTable({
        paging: false,
        //searching: false,
        "bDestroy": true,
        //dom: 'Bfrtip',
        buttons: [
           'copy', 'csv', 'excel', 'pdf']
    });
    $('.renew').click(function () {

        swal.fire({
            text: "Thanks, Your Renewl Under Process",
            icon: "success",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            confirmButtonClass: "btn font-weight-bold btn-light-primary"
        }).then(function () {
        });
    });
}


function getquotagenttrans(AGID) {
    $.ajax(
          {
              type: "GET",
              cache: false,
              crossDomain: "true",
              url: baseurl + "/api/GetQuotationbyagent/list?agentId=" + AGID,
              beforeSend: function () {
                  $("#QdivResult").html("<tr><td colspan='4'> Loading!</td> </tr>");
              },
              success: function (data) {
                  console.log(data);
                  qdataagenttransgrid(data);
                 
              },
              dataType: "json"
          });
}
function qdataagenttransgrid(list) {
    grdGetEnquiry = '';
    $.each(list, function (index, item) {
        grdGetEnquiry += "<tr> <td>" + item.QuotationId + "</td> <td><span>" + item.TotalPremium + "</span></td><td>" + item.Vehiclenumber + "</td><td><a class='btn btn-primary btn-shadow-hover font-weight-bold mr-2' href='#/mtquo/" + item.QuotationId + "'>Pay Now</a></td>";
    });
    $("#QdivResult").html(grdGetEnquiry);
    $("#Qexample").DataTable({
        paging: false,
        //searching: false,
        "bDestroy": true,
        //dom: 'Bfrtip',
        buttons: [
           'copy', 'csv', 'excel', 'pdf']
    });
  
}
// End

// Priya JS
function agentInsert() {
    $.ajax(
        {
            type: "POST",
            url: baseurl + "/api/InsertAgent/Insert",
            data: $("#motorreg").serialize(),
            crossDomain: "true",
            success: function (data) {
                console.log(data);
                swal.fire({
                    text: "Agent added successfully",
                    icon: "success",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    confirmButtonClass: "btn font-weight-bold btn-light-primary"
                }).then(function () {
                    location.reload();
                });
            },
            error: function (data) {
                swal.fire({
                    text: "Sorry, Agent   Unsuccessfully ",
                    icon: "error",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    confirmButtonClass: "btn font-weight-bold btn-light"
                }).then(function () {

                });
            },
            dataType: "json"
        });
}
function distributorInsert() {
    alert('test');
    $.ajax(
        {
            type: "POST",
            url: baseurl + "/api/InsertDistributor/Insert",
            data: $("#distreg").serialize(),
            crossDomain: "true",
            success: function (data) {
                console.log(data);
                swal.fire({
                    text: "distributor added successfully",
                    icon: "success",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    confirmButtonClass: "btn font-weight-bold btn-light-primary"
                }).then(function () {
                    location.reload();
                });
            },
            error: function (data) {
                swal.fire({
                    text: "Sorry, distributor   Unsuccessfully ",
                    icon: "error",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    confirmButtonClass: "btn font-weight-bold btn-light"
                }).then(function () {

                });
            },
            dataType: "json"
        });
}

function organisationInsert() {

    $.ajax(
        {
            type: "POST",
            url: baseurl + "/api/InsertOrganisation/Insert",
            data: $("#orgin").serialize(),
            crossDomain: "true",
            success: function (data) {
                console.log(data);
                swal.fire({
                    text: "organisation added successfully",
                    icon: "success",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    confirmButtonClass: "btn font-weight-bold btn-light-primary"
                }).then(function () {
                    location.reload();
                });
            },
            error: function (data) {
                swal.fire({
                    text: "Sorry, organisation   Unsuccessfully ",
                    icon: "error",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    confirmButtonClass: "btn font-weight-bold btn-light"
                }).then(function () {

                });
            },
            dataType: "json"
        });
}

function HOInsert() {

    $.ajax(
        {
            type: "POST",
            url: baseurl + "/api/InsertHo/Insert",
            data: $("#horeg").serialize(),
            crossDomain: "true",
            success: function (data) {
                console.log(data);
                swal.fire({
                    text: "HO added successfully",
                    icon: "success",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    confirmButtonClass: "btn font-weight-bold btn-light-primary"
                }).then(function () {
                    location.reload();
                });
            },
            error: function (data) {
                swal.fire({
                    text: "Sorry, HO   Unsuccessfully ",
                    icon: "error",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    confirmButtonClass: "btn font-weight-bold btn-light"
                }).then(function () {

                });
            },
            dataType: "json"
        });
}

function lsppInsert() {

    $.ajax(
        {
            type: "POST",
            url: baseurl + "/api/CustomerMaster/Insert",
            data: $("#reglsp").serialize(),
            crossDomain: "true",
            success: function (data) {
                console.log(data);
                swal.fire({
                    text: "Policy added successfully",
                    icon: "success",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    confirmButtonClass: "btn font-weight-bold btn-light-primary"
                }).then(function () {
                    location.reload();
                });
            },
            error: function (data) {
                swal.fire({
                    text: "Sorry, Policy   Unsuccessfully ",
                    icon: "error",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    confirmButtonClass: "btn font-weight-bold btn-light"
                }).then(function () {

                });
            },
            dataType: "json"
        });
}


// End
   