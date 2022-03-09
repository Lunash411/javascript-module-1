function mood(msg) {
    if(mood === "Happy"){
        return `${msg} "good job you are doing great"`
    }else if (msg === "sad"){
        return `${msg} Every cloud has a silver lining`
    }else if (msg === "Number"){
        return `${msg} "beep beep beep"`
    }else{
        return `${msg} "am sorry still working on it"`
    }

}
console.log(mood('Number'))