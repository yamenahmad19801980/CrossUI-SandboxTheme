xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout1")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("59.733333333333334em")
                .setHeight("46.32380952380952em")
                .setLayoutData({
                    "rows" : 5,
                    "cols" : 5,
                    "rowSetting" : {
                        "1" : {
                            "manualHeight" : 50
                        },
                        "2" : {
                            "manualHeight" : 50
                        },
                        "3" : {
                            "manualHeight" : 50
                        },
                        "4" : {
                            "manualHeight" : 50
                        },
                        "5" : {
                            "manualHeight" : 50
                        }
                    }
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});