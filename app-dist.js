function clickSwitchClass(i,n){$(i).on("click",(function(){$(i).not(this).removeClass(n),$(this).addClass(n)}))}const loading={transition:()=>{$(".loading")[0].onanimationend=i=>{$(".loading").slideUp(),setTimeout((()=>{$(".loading").hide(),$(".content").addClass("show")}),300)}}};$((()=>{loading.transition(),clickSwitchClass($(".menu-option a"),"active")}));