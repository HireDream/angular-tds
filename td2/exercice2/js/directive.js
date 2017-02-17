/**
 * Created by PICOT Maxence on 17/02/2017.
 */


angular.module("ContactApp").directive("contactElem", function () {
   return {
       restrict: 'EA',
       templateUrl: 'template/contact.html',
       scope: {contact:'=', update:'&', delete:'&'}
   }
});

angular.module("ContactApp").directive("frmContact", function () {
    return {
        restrict: 'EA',
        templateUrl: 'template/form.html',
        scope: {operation:'=', tmpcontact:'=', update:'&', edit:'&'}
    }
});
