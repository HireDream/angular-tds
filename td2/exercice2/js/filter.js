/**
 * Created by PICOT Maxence on 17/02/2017.
 */

angular.module("ContactApp").filter("notDeleted", function () {
    return function(items) {
        res = [];
        for ( i = 0; i < items.length; i++) {
            if ( items[i].deleted == false)
                res.push(items[i]);
        }
        return res;
    }
});
