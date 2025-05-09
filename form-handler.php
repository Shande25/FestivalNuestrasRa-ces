<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP (esto debe ajustarse a tu proveedor real)
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Cambia según tu proveedor
        $mail->SMTPAuth = true;
        $mail->Username = 'jahirparedes670@gmail.com'; // Tu correo
        $mail->Password = 'kywp eiub tksk jlvp'; // Usa App Password si es Gmail
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Desde y hacia
        $mail->setFrom('jahirparedes670@gmail.com', 'Formulario Festival'); // Desde
        $mail->addAddress('jahirparedes670@gmail.com'); // A TI, el organizador (el destinatario fijo)

        // Contenido
        $mail->isHTML(false);
        $mail->Subject = 'Nuevo mensaje del formulario';
        $mail->Body =
            "Cedula: " . $_POST['Cedula'] . "\n" .
            "Nombres: " . $_POST['Nombres'] . "\n" .
            "Apellidos: " . $_POST['Apellidos'] . "\n" .
            "Correo: " . $_POST['CorreoElectronico'] . "\n" .
            "Teléfono: " . $_POST['Telefono'] . "\n" .
            "Barrio: " . $_POST['Barrio'];

        $mail->send();
        header("Location: enviado.html");
        exit();
    } catch (Exception $e) {
        echo "Error al enviar el mensaje: {$mail->ErrorInfo}";
    }
}
?>
