function SendMail(){
    var params={
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_bl8r4l4", "template_15wqbyp", params).then(function(res){
        alert("Success!"+res.status)
    });
}