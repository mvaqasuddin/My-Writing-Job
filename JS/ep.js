var areYouReallySure=false;var internalLink=false;function downsell()
{location.href=eurl;}
function areYouSure(){if(typeof(dep)!='undefined'){if(dep)areYouReallySure=true;}
if(!areYouReallySure&&!internalLink)
{areYouReallySure=true;if(navigator.userAgent.indexOf("Chrome")!=-1)
{setTimeout(downsell,1);}
else
{downsell();}
return vmsg;}}
function trim(str,chars){return ltrim(rtrim(str,chars),chars);}
function ltrim(str,chars){chars=chars||"\\s";return str.replace(new RegExp("^["+ chars+"]+","g"),"");}
function rtrim(str,chars){chars=chars||"\\s";return str.replace(new RegExp("["+ chars+"]+$","g"),"");}
function onSubmit(form){if(document.getElementById('state').type=="text"){document.getElementById('statevar').value=trim(document.getElementById('state').value);document.getElementById('statecode').value=trim(document.getElementById('state').value);}
else{document.getElementById('statevar').value=trim(document.getElementById('state').options[document.getElementById('state').selectedIndex].text);document.getElementById('statecode').value=trim(document.getElementById('state').options[document.getElementById('state').selectedIndex].value);}
document.getElementById('countryvar').value=trim(document.getElementById('country').options[document.getElementById('country').selectedIndex].text);document.getElementById('countrycode').value=trim(document.getElementById('country').options[document.getElementById('country').selectedIndex].value);document.getElementById('exp_date').value=document.getElementById('exp_date_month').options[document.getElementById('exp_date_month').selectedIndex].value+''+ document.getElementById('exp_date_year').options[document.getElementById('exp_date_year').selectedIndex].value
form.submit();return true;}
window.onbeforeunload=areYouSure;