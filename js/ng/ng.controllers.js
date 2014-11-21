angular.module('app.controllers', [])
	.factory('settings', ['$rootScope', function($rootScope){
		// supported languages
		
		var settings = {
			languages: [
				{
					language: 'English',
					translation: 'English',
					langCode: 'en',
					flagCode: 'us'
				},
				{
					language: 'Espanish',
					translation: 'Espanish',
					langCode: 'es',
					flagCode: 'es'
				},
				{
					language: 'German',
					translation: 'Deutsch',
					langCode: 'de',
					flagCode: 'de'
				},
				{
					language: 'Korean',
					translation: '한국의',
					langCode: 'ko',
					flagCode: 'kr'
				},
				{
					language: 'French',
					translation: 'français',
					langCode: 'fr',
					flagCode: 'fr'
				},
				{
					language: 'Portuguese',
					translation: 'português',
					langCode: 'pt',
					flagCode: 'br'
				},
				{
					language: 'Russian',
					translation: 'русский',
					langCode: 'ru',
					flagCode: 'ru'
				},
				{
					language: 'Chinese',
					translation: '中國的',
					langCode: 'zh',
					flagCode: 'cn'
				}
			]
			
		};

		return settings;
		
	}])

	.controller('PageViewController', ['$scope', '$route', '$animate', function($scope, $route, $animate) {
		// controler of the dynamically loaded views, for DEMO purposes only.
		/*$scope.$on('$viewContentLoaded', function() {
			
		});*/
	}])

	.controller('SmartAppController', ['$scope', function($scope) {
		// your main controller
	}])

	.controller('LangController', ['$scope', 'settings', 'localize', function($scope, settings, localize) {
		$scope.languages = settings.languages;
		$scope.currentLang = settings.currentLang;
		$scope.setLang = function(lang) {
			settings.currentLang = lang;
			$scope.currentLang = lang;
			localize.setLang(lang);
		}

		// set the default language
		$scope.setLang($scope.currentLang);

	}])


;

angular.module('app.demoControllers', [])
	.controller('WidgetDemoCtrl', ['$scope', '$sce', function($scope, $sce) {
		$scope.title = 'SmartUI Widget';
		$scope.icon = 'fa fa-user';
		$scope.toolbars = [
			$sce.trustAsHtml('<div class="label label-success">\
				<i class="fa fa-arrow-up"></i> 2.35%\
			</div>'),
			$sce.trustAsHtml('<div class="btn-group" data-toggle="buttons">\
		        <label class="btn btn-default btn-xs active">\
		          <input type="radio" name="style-a1" id="style-a1"> <i class="fa fa-play"></i>\
		        </label>\
		        <label class="btn btn-default btn-xs">\
		          <input type="radio" name="style-a2" id="style-a2"> <i class="fa fa-pause"></i>\
		        </label>\
		        <label class="btn btn-default btn-xs">\
		          <input type="radio" name="style-a2" id="style-a3"> <i class="fa fa-stop"></i>\
		        </label>\
		    </div>')
		];

		$scope.content = $sce.trustAsHtml('\
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
	}])

	.controller('ActivityDemoCtrl', ['$scope', function($scope) {
		var ctrl = this;
		ctrl.getDate = function() {
			return new Date().toUTCString();
		};

		$scope.refreshCallback = function(contentScope, done) {

			// use contentScope to get access with activityContent directive's Control Scope
			console.log(contentScope);

			// for example getting your very long data ...........
			setTimeout(function() {
				done();
			}, 3000);

			$scope.footerContent = ctrl.getDate();
		};

		$scope.items = [
			{
				title: 'Msgs',
				count: 14, 
				src: 'ajax/notify/mail.html',
				onload: function(item) {
					console.log(item);
					alert('[Callback] Loading Messages ...');
				}
			},
			{
				title: 'Notify',
				count: 3,
				src: 'ajax/notify/notifications.html'
			},
			{
				title: 'Tasks',
				count: 4,
				src: 'ajax/notify/tasks.html'
				//active: true
			}
		];

		$scope.total = 0;
		angular.forEach($scope.items, function(item) {
			$scope.total += item.count;
		})

		$scope.footerContent = ctrl.getDate();
		
	}])

	.controller('sampleAlertsCtrl', ['$scope', function($scope){
		$scope.sampleAlerts = [{"cd":"2014-09-04T01:00:00.000Z","ph":9483539485,"level":"L1","type":"INT-IN",cnt:1,"ccname":"Saint Helena","ccshname":"SHN ","totcalls":10,"totdur":308},
			{"cd":"2014-09-04T02:00:00.000Z","ph":9386484565,"level":"L1","type":"INT-OUT",cnt:1,"ccname":"Faroe Islands","ccshname":"FRO ","totcalls":24,"totdur":241},
			{"cd":"2014-09-04T02:00:00.000Z","ph":7894854989,"level":"L2","type":"DOMESTIC",cnt:1,"ccname":"Monaco","ccshname":"MCO ","totcalls":35,"totdur":701},
			{"cd":"2014-09-04T02:00:00.000Z","ph":8395684246,"level":"L2","type":"INT-IN",cnt:1,"ccname":"Latvia","ccshname":"LVA ","totcalls":38,"totdur":832},
			{"cd":"2014-09-04T02:00:00.000Z","ph":9485784123,"level":"L2","type":"INT-OUT",cnt:1,"ccname":"Gibraltar","ccshname":"GIB ","totcalls":33,"totdur":343},
			{"cd":"2014-09-04T02:00:00.000Z","ph":8045794504,"level":"L3","type":"DOMESTIC",cnt:1,"ccname":"Iceland","ccshname":"IS ","totcalls":45,"totdur":993},
			{"cd":"2014-09-04T02:00:00.000Z","ph":7648579234,"level":"L3","type":"INT-IN",cnt:1,"ccname":"Tanzania","ccshname":"TZA ","totcalls":75,"totdur":885},
			{"cd":"2014-09-04T02:00:00.000Z","ph":8493587164,"level":"L2","type":"INT-IN",cnt:1,"ccname":"Macedonia","ccshname":"MKD ","totcalls":35,"totdur":154},
			{"cd":"2014-09-04T02:00:00.000Z","ph":7464875643,"level":"L3","type":"INT-IN",cnt:1,"ccname":"Madagascar","ccshname":"MDG ","totcalls":54,"totdur":534},
			{"cd":"2014-09-04T02:00:00.000Z","ph":7434398723,"level":"L2","type":"INT-OUT",cnt:1,"ccname":"British Indian Ocean Territory","ccshname":"IOT ","totcalls":29,"totdur":144},
			{"cd":"2014-09-04T02:00:00.000Z","ph":9847534122,"level":"L2","type":"DOMESTIC",cnt:1,"ccname":"Finland","ccshname":"FIN ","totcalls":31,"totdur":943},
			{"cd":"2014-09-04T03:00:00.000Z","ph":9484875634,"level":"L2","type":"INT-OUT",cnt:1,"ccname":"Finland","ccshname":"FIN ","totcalls":32,"totdur":944},
			{"cd":"2014-09-04T03:00:00.000Z","ph":9475634246,"level":"L1","type":"DOMESTIC",cnt:1,"ccname":"Malta","ccshname":"MLT ","totcalls":15,"totdur":935},
			{"cd":"2014-09-04T04:00:00.000Z","ph":8345613458,"level":"L1","type":"DOMESTIC",cnt:1,"ccname":"Cyprus","ccshname":"CYP ","totcalls":19,"totdur":134},
			{"cd":"2014-09-04T04:00:00.000Z","ph":9345645459,"level":"L1","type":"DOMESTIC",cnt:1,"ccname":"Liechtenstein","ccshname":"LIE ","totcalls":21,"totdur":925},
			{"cd":"2014-09-04T04:00:00.000Z","ph":9837454474,"level":"L2","type":"INT-IN",cnt:1,"ccname":"Kenya","ccshname":"KEN ","totcalls":31,"totdur":433},
			{"cd":"2014-09-04T04:00:00.000Z","ph":8493485724,"level":"L2","type":"INT-OUT",cnt:1,"ccname":"Eritrea","ccshname":"ERI ","totcalls":32,"totdur":924},
			{"cd":"2014-09-04T05:00:00.000Z","ph":9438857234,"level":"L1","type":"INT-OUT",cnt:1,"ccname":"Montenegro","ccshname":"MNE ","totcalls":21,"totdur":224},
			{"cd":"2014-09-04T05:00:00.000Z","ph":9438524345,"level":"L2","type":"DOMESTIC",cnt:1,"ccname":"Rwanda","ccshname":"RWA ","totcalls":34,"totdur":262},
			{"cd":"2014-09-04T05:00:00.000Z","ph":8384653525,"level":"L3","type":"INT-IN",cnt:1,"ccname":"Bulgaria","ccshname":"BGR ","totcalls":63,"totdur":279},
			{"cd":"2014-09-04T05:00:00.000Z","ph":7834754534,"level":"L1","type":"INT-IN",cnt:1,"ccname":"Seychelles","ccshname":"SYC ","totcalls":23,"totdur":181},
			{"cd":"2014-09-04T05:00:00.000Z","ph":9834754324,"level":"L2","type":"DOMESTIC",cnt:1,"ccname":"Malawi","ccshname":"MWI ","totcalls":12,"totdur":553},
			{"cd":"2014-09-04T05:00:00.000Z","ph":9544556564,"level":"L3","type":"INT-IN",cnt:1,"ccname":"Zimbabwe","ccshname":"ZWE ","totcalls":43,"totdur":100},
			{"cd":"2014-09-04T06:00:00.000Z","ph":8546345454,"level":"L1","type":"DOMESTIC",cnt:1,"ccname":"Mozambique","ccshname":"MOZ ","totcalls":22,"totdur":172},
			{"cd":"2014-09-04T06:00:00.000Z","ph":9848563453,"level":"L2","type":"INT-OUT",cnt:1,"ccname":"Luxembourg","ccshname":"LUX ","totcalls":33,"totdur":205},
			{"cd":"2014-09-04T07:00:00.000Z","ph":8458475644,"level":"L3","type":"INT-IN",cnt:1,"ccname":"Botswana","ccshname":"BWA ","totcalls":63,"totdur":189},
			{"cd":"2014-09-04T07:00:00.000Z","ph":9374345245,"level":"L2","type":"DOMESTIC",cnt:1,"ccname":"Zambia","ccshname":"ZMB ","totcalls":31,"totdur":112},
			{"cd":"2014-09-04T07:00:00.000Z","ph":8834755435,"level":"L3","type":"INT-IN",cnt:1,"ccname":"Comoros","ccshname":"COM ","totcalls":51,"totdur":283},
			{"cd":"2014-09-04T07:00:00.000Z","ph":9746343453,"level":"L3","type":"INT-OUT",cnt:1,"ccname":"Somalia","ccshname":"SOM ","totcalls":64,"totdur":204},
			{"cd":"2014-09-04T08:00:00.000Z","ph":9436545589,"level":"L1","type":"INT-IN",cnt:1,"ccname":"Moldova","ccshname":"MDA ","totcalls":11,"totdur":443},
			{"cd":"2014-09-04T08:00:00.000Z","ph":9437564254,"level":"L2","type":"DOMESTIC",cnt:1,"ccname":"Djibouti","ccshname":"DJI ","totcalls":31,"totdur":505},
			{"cd":"2014-09-04T08:00:00.000Z","ph":9346533564,"level":"L3","type":"INT-OUT",cnt:1,"ccname":"Portugal","ccshname":"PRT ","totcalls":51,"totdur":101},
			{"cd":"2014-09-04T08:00:00.000Z","ph":8947562245,"level":"L1","type":"DOMESTIC",cnt:1,"ccname":"Czech Republic","ccshname":"CZE ","totcalls":21,"totdur":443},
			{"cd":"2014-09-04T08:00:00.000Z","ph":7843574456,"level":"L2","type":"INT-IN",cnt:1,"ccname":"Croatia","ccshname":"HRV ","totcalls":33,"totdur":596},
			{"cd":"2014-09-04T08:00:00.000Z","ph":8374633245,"level":"L3","type":"INT-IN",cnt:1,"ccname":"United Arab Emirates","ccshname":"ARE ","totcalls":68,"totdur":345},
			{"cd":"2014-09-04T08:00:00.000Z","ph":7434756676,"level":"L2","type":"INT-OUT",cnt:1,"ccname":"Andorra","ccshname":"AND ","totcalls":31,"totdur":214},
			{"cd":"2014-09-04T08:00:00.000Z","ph":8745613356,"level":"L2","type":"DOMESTIC",cnt:1,"ccname":"Uganda","ccshname":"UGA ","totcalls":31,"totdur":225},
			{"cd":"2014-09-04T10:00:00.000Z","ph":7564394574,"level":"L1","type":"INT-OUT",cnt:1,"ccname":"Ukraine","ccshname":"UKR ","totcalls":21,"totdur":922},
			{"cd":"2014-09-04T10:00:00.000Z","ph":8732463356,"level":"L2","type":"DOMESTIC",cnt:1,"ccname":"Ireland","ccshname":"IRL ","totcalls":32,"totdur":515},
			{"cd":"2014-09-04T10:00:00.000Z","ph":8327632356,"level":"L3","type":"INT-IN",cnt:1,"ccname":"Mayotte","ccshname":"MYT ","totcalls":46,"totdur":255},
			{"cd":"2014-09-04T10:00:00.000Z","ph":7821756546,"level":"L1","type":"DOMESTIC",cnt:1,"ccname":"Aruba","ccshname":"ABW ","totcalls":11,"totdur":183},
			{"cd":"2014-09-04T11:00:00.000Z","ph":9059456834,"level":"L2","type":"INT-OUT",cnt:1,"ccname":"Ethiopia","ccshname":"ETH ","totcalls":30,"totdur":345},
			{"cd":"2014-09-04T11:00:00.000Z","ph":9083985643,"level":"L3","type":"INT-IN",cnt:1,"ccname":"Lesotho","ccshname":"LSO ","totcalls":50,"totdur":345},
			{"cd":"2014-09-04T11:00:00.000Z","ph":9884635609,"level":"L1","type":"INT-OUT",cnt:1,"ccname":"Swaziland","ccshname":"SWZ ","totcalls":20,"totdur":435},
			{"cd":"2014-09-04T11:00:00.000Z","ph":9348584560,"level":"L2","type":"INT-OUT",cnt:1,"ccname":"Lithuania","ccshname":"LTU ","totcalls":30,"totdur":344},
			{"cd":"2014-09-04T11:00:00.000Z","ph":9928374456,"level":"L3","type":"INT-IN",cnt:1,"ccname":"Estonia","ccshname":"EST ","totcalls":50,"totdur":345},
			{"cd":"2014-09-04T11:00:00.000Z","ph":8799348754,"level":"L1","type":"INT-OUT",cnt:1,"ccname":"Belarus","ccshname":"BLR ","totcalls":20,"totdur":34},
			{"cd":"2014-09-04T11:00:00.000Z","ph":9954502457,"level":"L2","type":"DOMESTIC",cnt:1,"ccname":"San Marino","ccshname":"SMR ","totcalls":30,"totdur":345},
			{"cd":"2014-09-04T11:00:00.000Z","ph":9859348574,"level":"L3","type":"INT-IN",cnt:1,"ccname":"Serbia  and Kosovo","ccshname":"SRB ","totcalls":21,"totdur":123},
			{"cd":"2014-09-04T12:00:00.000Z","ph":9013948498,"level":"L1","type":"INT-IN",cnt:1,"ccname":"Slovenia","ccshname":"SVN ","totcalls":21,"totdur":234},
			{"cd":"2014-09-04T12:00:00.000Z","ph":9023493458,"level":"L1","type":"DOMESTIC",cnt:1,"ccname":"Slovakia","ccshname":"SVK ","totcalls":20,"totdur":345},
			{"cd":"2014-09-04T12:00:00.000Z","ph":9854985749,"level":"L2","type":"INT-OUT",cnt:1,"ccname":"Sudan","ccshname":"SDN ","totcalls":33,"totdur":123}
		];

	}])
	
	//Angular-Strap Aside Example Controller
	.controller('asideCtrl', ['$scope', function($scope){
		$scope.title = 'Aside Example';
		//console.log("coming from controller, AsideCtrl");
	}])
	
	//Controller for Tagging Numbers in the Home Page Data Table
	.controller('tagNumbers',['$scope', function($scope){
		$scope.title = 'Tag Numbers';
		$scope.send = function(col){
			$scope.num=col.pn;
			$scope.cat=col.ct;
			$scope.cn=col.cn;
		};
	}])
	
	//Controller to get Trigger Data
	.controller('triggerDataCtrl', ['$scope', '$http', function($scope, $http){
		$http({
			method : 'JSON',
			url : '../services/getCallTriggers.xsjs'
		}).success(function(data, status, headers, config) {
			console.log("International triggers",data);
			$scope.triggerData = data;
		}).error(function(data, status, headers, config) {
		});
		console.log("Trigger Data from the Data", $scope.triggerData);
	}])
	
	.controller('callSummaryCtrl', ['$scope', '$http', function($scope, $http){
		$http({
			method : 'JSON',
			url : '../services/getCallSummary.xsjs'
		}).success(function(data, status, headers, config) {
			$scope.callSummary = data;
			//console.log("International triggers",data);
		}).error(function(data, status, headers, config) {
		});
		//console.log("Trigger Data from Data", triggerData);
	}])
	
	.controller('countryStatCtrl', ['$scope', '$http', function($scope, $http){
		$http({
			method : 'JSON',
			url : '../services/getCountryStat.xsjs'
		}).success(function(data, status, headers, config) {
			$scope.countryStat = data;
			//console.log("International triggers",data);
		}).error(function(data, status, headers, config) {
		});
		//console.log("Trigger Data", $scope.triggerData);
	}])
	
	.filter("asDate", function () {
		return function (input) {
			return new Date(input);
    };
});
;
