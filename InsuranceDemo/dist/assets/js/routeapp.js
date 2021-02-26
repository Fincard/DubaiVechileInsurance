(function ($) {

    var app = $.sammy('#app', function () {
        this.use('Template');

        //root route
        this.get('#/', function (context) {
            context.app.swap('');
            $.each(this.items, function (i, item) {
                context.render('templates/article.template', { id: i, item: item })
                    .appendTo(context.$element());
            });
        });

       
        // Home
        this.get('#/Home/', function (context) {

            context.app.swap('');
            context.render('Project/Home.html', {})
                .appendTo(context.$element());
        });
        // Login
        this.get('#/LSPBrocher/', function (context) {

            context.app.swap('');
            context.render('Project/LSPBrocher.html', {})
                .appendTo(context.$element());
        });
        //Agent page route  userpage
        this.get('#/LSPProduct/', function (context) {

            context.app.swap('');
            context.render('Project/LSPProduct.html', {})
                .appendTo(context.$element());
        });
        //Agent page route  personal info
        this.get('#/LSPRegister/', function (context) {

            context.app.swap('');
            context.render('Project/LSPRegister.html', {})
                .appendTo(context.$element());
        });
        // Agent page route services update
        this.get('#/Adashboard/', function (context) {
            context.app.swap('');
            context.render('Project/ADashboard.html', {})
                .appendTo(context.$element());
        });
        // Agent page route My view
        this.get('#/usergroup/', function (context) {
            context.app.swap('');
            context.render('Project/Usergroup.html', {})
                .appendTo(context.$element());
        });
        // Agent page route My Payment 
        this.get('#/Aproduct/', function (context) {
            context.app.swap('');
            context.render('Project/AProduct.html', {})
                .appendTo(context.$element());
        });
        //user page route My Result 
        this.get('#/Benefit/', function (context) {
            context.app.swap('');
            context.render('Project/ABenefit.html', {})
                .appendTo(context.$element());
        });
        this.get('#/Motorins/', function (context) {
            context.app.swap('');
            context.render('Project/MotorInsurance.html', {})
                .appendTo(context.$element());
        });
        this.get('#/Motorreg/', function (context) {
            context.app.swap('');
            context.render('Project/MotorRegister.html', {})
                .appendTo(context.$element());
        });
        this.get('#/Motorclaim/', function (context) {
            context.app.swap('');
            context.render('Project/MotorClaim.html', {})
                .appendTo(context.$element());
        });
        this.get('#/Motorclaimregister/', function (context) {
            context.app.swap('');
            context.render('Project/MotorClaimRegister.html', {})
                .appendTo(context.$element());
        });
        this.get('#/Claimview/', function (context) {
            context.app.swap('');
            context.render('Project/HOClaimview.html', {})
                .appendTo(context.$element());
        });
        this.get('#/DDashboard/', function (context) {
            context.app.swap('');
            context.render('Project/DDashboard.html', {})
                .appendTo(context.$element());
        });
        this.get('#/Amdashboard/', function (context) {
            context.app.swap('');
            context.render('Project/AmDashboard.html', {})
                .appendTo(context.$element());
        });
        this.get('#/hodashboard/', function (context) {
            context.app.swap('');
            context.render('Project/hoDashboard.html', {})
                .appendTo(context.$element());
        });
        
        // user page route search services
        this.get('#/mtquo/:id', function (context) {
            ID = this.params['id'];
            context.app.swap('');
            context.render('Project/MotorQuotaion.html', {})
                .appendTo(context.$element());
        });
        this.get('#/mtpolicy/:id', function (context) {
            ID = this.params['id'];
            context.app.swap('');
            context.render('Project/MotorPolicy.html', {})
                .appendTo(context.$element());
        });
        
        // Admin page route Dashboard
        this.get('#/policylink/', function (context) {
            context.app.swap('');
            context.render('Project/AgPolicylink.html', {})
                .appendTo(context.$element());
        });
        // Admin page route Dashboard
        this.get('#/transaction/', function (context) {
            context.app.swap('');
            context.render('Project/Usertransaction.html', {})
                .appendTo(context.$element());
        });
        // Admin page route Agents
        this.get('#/claimupdate/:id', function (context) {
            ID = this.params['id'];
            context.app.swap('');
            context.render('Project/ClaimUpdate.html', {})
                .appendTo(context.$element());
        });
        
        this.get('#/HOClaimupdate/:id', function (context) {
            ID = this.params['id'];
            context.app.swap('');
            context.render('Project/HoClaimUpdate.html', {})
                .appendTo(context.$element());
        });
        // Admin page route Payment
        this.get('#/APayment/', function (context) {
            context.app.swap('');
            context.render('Project/Admin/Payment.html', {})
                .appendTo(context.$element());
        });
        // Admin page route View
        // View by Id
        this.get('#/View/:id', function (context) {
            ID = this.params['id'];
            context.app.swap('');
            context.render('Project/Admin/View.html', {})
                .appendTo(context.$element());
        });


        // Priya route
        this.get('#/HOMaintanence/', function (context) {
            context.app.swap('');
            context.render('Project/HOMaintanence.html', {})
                .appendTo(context.$element());
        });

        this.get('#/Distributor/', function (context) {
            context.app.swap('');
            context.render('Project/DistributorRegister.html', {})
                .appendTo(context.$element());
        });

        this.get('#/Agentmain/', function (context) {
            context.app.swap('');
            context.render('Project/AgentMaintanence.html', {})
                .appendTo(context.$element());
        });
        //user page route My Result 
        this.get('#/OrganisationMaintanence/', function (context) {
            context.app.swap('');
            context.render('Project/OrganisationMaintanence.html', {})
                .appendTo(context.$element());
        });
        //user page route My Result 
        this.get('#/ViewDistributoragent/', function (context) {
            context.app.swap('');
            context.render('Project/ViewDistributoragent.html', {})
                .appendTo(context.$element());
        });
      
        // End
        this.before('.*', function () {

            var hash = document.location.hash;
            $("nav").find("a").removeClass("current");
            $("nav").find("a[href='" + hash + "']").addClass("current");
        });

    });

    $(function () {
        app.run('#/Home/');
    });

})(jQuery);