"use strict";
 function role () {
    var role = localStorage.getItem("Roleid");
    if (role == 1) {
        location.href = 'dist/Admin.html#/Amdashboard/'
    }
    if (role == 2) {
        location.href = 'dist/Distributor.html#/DDashboard/'
    }
    if (role == 3) {
        location.href = 'dist/Agent.html#/Adashboard/'
    }
    if (role == 4) {
        location.href = 'dist/Index.html#/Home/'
    }
    if (role == 5) {
        location.href = 'dist/Headoffice.html#/hodashboard/'
    }
   
}
// Class Definitions
var KTLoginGeneral = function() {
    var _login;

    var _showForm = function(form) {
        var cls = 'login-' + form + '-on';
        var form = 'kt_login_' + form + '_form';

        _login.removeClass('login-forgot-on');
        _login.removeClass('login-signin-on');
        _login.removeClass('login-signup-on');

        _login.addClass(cls);

        KTUtil.animateClass(KTUtil.getById(form), 'animate__animated animate__backInUp');
    }

    var _handleSignInForm = function() {
        var validation;

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validation = FormValidation.formValidation(
			KTUtil.getById('kt_login_signin_form'),
			{
				fields: {
				    emailid: {
						validators: {
							notEmpty: {
								message: 'Email id is required'
							}
						}
					},
				    password: {
						validators: {
							notEmpty: {
								message: 'Password is required'
							}
						}
					}
					
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger(),
					bootstrap: new FormValidation.plugins.Bootstrap()
				}
			}
		);

        $('#kt_login_signin_submit').on('click', function (e) {
            e.preventDefault();
            var em = $("#emailid").val();
            var pass = $("#password").val();
            if ($("#emp").prop('checked') == true)
            {
                var check = true
            }
            else
            {
                var check = false
            }
         
            validation.validate().then(function(status) {
                if (status == 'Valid') {
                    // Ajax call for sign in
                 
                    swal.fire({
		                text: "All is cool! You can login",
		                icon: "success",
		                buttonsStyling: false,
		                confirmButtonText: "Ok, got it!",
		                confirmButtonClass: "btn font-weight-bold btn-light-primary"
                    }).then(function () {
                        $.ajax(
      {
          type: "GET",
          url: baseurl + "/api/GetLogin/list?emailid=" + em + "&password=" + pass + "&emp=" + check,
          data: $("#reglsp").serialize(),
          crossDomain: "true",
          success: function (data) {
             console.log(data);
              localStorage.setItem("Roleid", data[0].RoleId);
              localStorage.setItem("P_UserName", data[0].P_UserName);
              localStorage.setItem("AgentID", data[0].AgentID);
              localStorage.setItem("DistID", data[0].DistID);
              localStorage.setItem("P_UserID", data[0].P_UserID);
              //location.href = 'dist/index.html';
              role();
          },
          error: function (data) {
              swal.fire({
                  text: "Sorry, Invalid Email or Password, please try again.",
                  icon: "error",
                  buttonsStyling: false,
                  confirmButtonText: "Ok, got it!",
                  confirmButtonClass: "btn font-weight-bold btn-light"
              }).then(function () {
                  KTUtil.scrollTop();
              });
          },
          dataType: "json"

      });


						KTUtil.scrollTop();
					});
				} else {
					swal.fire({
		                text: "Sorry, looks like there are some errors detected, please try again.",
		                icon: "error",
		                buttonsStyling: false,
		                confirmButtonText: "Ok, got it!",
		                confirmButtonClass: "btn font-weight-bold btn-light"
		            }).then(function() {
						KTUtil.scrollTop();
					});
				}
		    });
        });

        // Handle forgot button
        $('#kt_login_forgot').on('click', function (e) {
            e.preventDefault();
            _showForm('forgot');
        });

        // Handle signup
        $('#kt_login_signup').on('click', function (e) {
            e.preventDefault();
            _showForm('signup');
        });
    }

    var _handleSignUpForm = function(e) {
        var validation;
        var form = KTUtil.getById('kt_login_signup_form');

        validation = FormValidation.formValidation(
			form,
			{
				fields: {
				    P_UserName: {
						validators: {
							notEmpty: {
								message: 'Username is required'
							}
						}
					},
				    P_MailId: {
                        validators: {
							notEmpty: {
								message: 'Email address is required'
							},
                            emailAddress: {
								message: 'The value is not a valid email address'
							}
						}
					},
				    P_Password: {
                        validators: {
                            notEmpty: {
                                message: 'The password is required'
                            }
                        }
				    },
				    P_DOB: {
				        validators: {
				            notEmpty: {
				                message: 'Date of Birth is required'
				            }
				        }
				    },
				    P_Mobile: {
				        validators: {
				            notEmpty: {
				                message: 'Mobile number is required'
				            }
				        }
				    },
				    C_P_Password: {
                        validators: {
                            notEmpty: {
                                message: 'The password confirmation is required'
                            },
                            identical: {
                                compare: function() {
                                    return form.querySelector('[name="password"]').value;
                                },
                                message: 'The password and its confirm are not the same'
                            }
                        }
                    },
                   
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger(),
					bootstrap: new FormValidation.plugins.Bootstrap()
				}
			}
		);

        $('#kt_login_signup_submit').on('click', function (e) {
            e.preventDefault();
            validation.validate().then(function(status) {
                if (status == 'Valid') {
                    console.log($("#kt_login_signup_form").serialize());
                    // Ajax call for creating new cutomer
                    swal.fire({
		                text: "All is cool! Registered successfully!!",
		                icon: "success",
		                buttonsStyling: false,
		                confirmButtonText: "Ok, got it!",
		                confirmButtonClass: "btn font-weight-bold btn-light-primary"
                    }).then(function () {
                        $.ajax(
           {
               type: "POST",
               url: baseurl + "/api/CustomerRegistration/Insert",
               data: $("#kt_login_signup_form").serialize(),
               crossDomain: "true",
               success: function (data) {
                   _showForm('signin');
               },
               error: function (data) {
               },
               dataType: "json"
           });
						KTUtil.scrollTop();
					});
				} else {
					swal.fire({
		                text: "Sorry, looks like there are some errors detected, please try again.",
		                icon: "error",
		                buttonsStyling: false,
		                confirmButtonText: "Ok, got it!",
		                confirmButtonClass: "btn font-weight-bold btn-light"
		            }).then(function() {
						KTUtil.scrollTop();
					});
				}
		    });
        });

        // Handle cancel button
        $('#kt_login_signup_cancel').on('click', function (e) {
            e.preventDefault();

            _showForm('signin');
        });
    }

    var _handleForgotForm = function(e) {
        var validation;

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validation = FormValidation.formValidation(
			KTUtil.getById('kt_login_forgot_form'),
			{
				fields: {
					email: {
						validators: {
							notEmpty: {
								message: 'Email address is required'
							},
                            emailAddress: {
								message: 'The value is not a valid email address'
							}
						}
					}
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger(),
					bootstrap: new FormValidation.plugins.Bootstrap()
				}
			}
		);

        // Handle submit button
        $('#kt_login_forgot_submit').on('click', function (e) {
            e.preventDefault();

            validation.validate().then(function(status) {
		        if (status == 'Valid') {
                    // Submit form
                    KTUtil.scrollTop();
				} else {
					swal.fire({
		                text: "Sorry, looks like there are some errors detected, please try again.",
		                icon: "error",
		                buttonsStyling: false,
		                confirmButtonText: "Ok, got it!",
		                confirmButtonClass: "btn font-weight-bold btn-light"
		            }).then(function() {
						KTUtil.scrollTop();
					});
				}
		    });
        });

        // Handle cancel button
        $('#kt_login_forgot_cancel').on('click', function (e) {
            e.preventDefault();

            _showForm('signin');
        });
    }

    // Public Functions
    return {
        // public functions
        init: function() {
            _login = $('#kt_login');

            _handleSignInForm();
            _handleSignUpForm();
            _handleForgotForm();
        }
    };
}();

// Class Initialization
jQuery(document).ready(function() {
    KTLoginGeneral.init();
});


