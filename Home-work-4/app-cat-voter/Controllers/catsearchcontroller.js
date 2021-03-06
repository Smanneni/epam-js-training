//need to refractor h-w-1 section 3
(function (module) {
    "use strict";
    function catsearchcontroller() {
        var vm = this;
        vm.cats = [{
            name: 'cat1',
            url: 'http://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&amp;h=426'

        }, {
            name: 'cat2',
            url: 'http://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454',

        }, {
            name: 'cat3',
            url: 'http://www.businessinsider.com/image/4f3433986bb3f7b67a00003c/cute-cat.jpg'

        }, {
            name: 'cat4',
            url: 'http://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&amp;h=426',

        }, {
            name: 'cat5',
            url: 'http://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496'

        }];
        vm.Allcats = vm.cats;
        vm.search = search;
        vm.resetAll = resetAll;
        function search() {
            vm.cats = _.filter(vm.Allcats,
                function (item) {
                    return searchUtil(item, vm.searchText);
                });

            if (vm.searchText == '') {
                vm.cats = vm.Allcats;
            }
            // vm.resetAll();
        }
        function searchUtil(item, toSearch) {
            /* Search Text in all 3 fields */
            return (item.name.toLowerCase().indexOf(toSearch.toLowerCase()) > -1) ? true : false;
        }

        function resetAll() {
            vm.cats = vm.Allcats;
            vm.searchText = '';
        }

    }
    module.controller("catsearchcontroller", catsearchcontroller);

})(angular.module("catvoter"));