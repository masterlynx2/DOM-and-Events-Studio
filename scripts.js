// Write your JavaScript code here.
function init () {
    const takeoffbutton = document.getElementById("takeoff");
    const landbutton = document.getElementById("landing");
    const flightstat = document.getElementById("flightStatus");
    const planeflight= document.getElementById("spaceShuttleHeight")
    const shuttleBg=document.getElementById("shuttleBackground")
    const abortmission=document.getElementById("missionAbort")
    const buttonup=document.getElementById('Up')
    const buttondown=document.getElementById('Done')
    const buttonright=document.getElementById('Right')
    const buttonleft=document.getElementById('Left')
    rocket.style.position = 'absolute'
    rocket.style.left = '0px'
    rocket.style.top = '0px'

// Remember to pay attention to page loading!

takeoffbutton.addEventListener('click', function(){
    let confirmation = confirm('confirm that the shuttle is ready for takoff.')
    if(confirmation = 'ok'){
        flightstat.innerHTML = "shuttle in flight"
        shuttleBg.style.backgroundColor = 'blue'
        planeflight.innerHTML = parseInt(planeflight.innerHTML) + 10000
    }
})

landbutton.addEventListener('click', function(){
    window.alert("the shuttle is landing.Landing gear engaged.")
    flightstat.innerHTML = "The shuttle has landed"
    shuttleBg.style.backgroundColor = ''
    planeflight.innerHTML = 0
})
abortmission.addEventListener('click', function(){
    let abortconfirm = confirm("Confirm that you want to abort the mission.")
        if(abortconfirm = 'ok'){
            flightstat.innerHTML = "Mission aborted."
            shuttleBg.style.backgroundColor = ''
            planeflight.innerHTML = 0
        }
    })

    buttonright.addEventListener('click', function(){
        let movementr = `${parseInt(rocket.style.left) +10} px`
        rocket.sytle.left = movementr
    })



}
window.addEventListener("load", init);