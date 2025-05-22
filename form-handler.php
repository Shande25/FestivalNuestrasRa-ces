<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'jahirparedes670@gmail.com';
        $mail->Password = 'kywp eiub tksk jlvp'; // Asegúrate de usar una contraseña de aplicación
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Desde y hacia
        $mail->setFrom('jahirparedes670@gmail.com', 'Formulario Festival');
        $mail->addAddress('jahirparedes670@gmail.com');

        // Adjuntar el video si se subió correctamente
        if (isset($_FILES['video']) && $_FILES['video']['error'] == UPLOAD_ERR_OK) {
            $mail->addAttachment($_FILES['video']['tmp_name'], $_FILES['video']['name']);
        }

        // Contenido del mensaje
        $mail->isHTML(false);
        $mail->Subject = 'Nuevo mensaje del formulario';
        $mail->Body =
            "Cedula: " . $_POST['Cedula'] . "\n" .
            "Nombres: " . $_POST['Nombres'] . "\n" .
            "Apellidos: " . $_POST['Apellidos'] . "\n" .
            "Correo: " . $_POST['CorreoElectronico'] . "\n" .
            "Teléfono: " . $_POST['Telefono'] . "\n" .
            "Barrio: " . $_POST['Barrio'] . "\n" .
            "Parroquia: " . $_POST['Parroquia'];

        $mail->send();
        header("Location: enviado.html");
        exit();
    } catch (Exception $e) {
        echo "Error al enviar el mensaje: {$mail->ErrorInfo}";
    }
}
?>
