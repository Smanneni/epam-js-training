//need to refractor h-w-1 section 3
(function(module) {
  module.controller("addcatcontroller", addcatcontroller);

})(angular.module("catvoter"));

function addcatcontroller($scope) {
  var vm=this;
	  vm.cats = [{
      name: 'one',
      url: 'http://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&amp;h=426'

    }, {
      name: 'two',
      url: 'http://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454',

    }, {
      name: 'three',
      url: 'http://www.businessinsider.com/image/4f3433986bb3f7b67a00003c/cute-cat.jpg'

    }, {
      name: 'four',
      url: 'http://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&amp;h=426',

    }, {
      name: 'five',
      url: 'http://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496'

    }];
    
     vm.allItems = vm.cats; 
      
     vm.resetAll = function()
     {
         vm.newName = '';
         vm.newUrl = '';
     }
     
     
     vm.add = function()
     {
         vm.allItems.push({name : vm.newName, url : vm.newUrl});
         vm.resetAll();  
     }
    
}

