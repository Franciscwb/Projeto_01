<?php
    include('../config.php');
    $data = array();
    $assunto = 'Nova mensagem do site!';
    $corpo = '';
    foreach ($_POST as $key => $value) {
        $corpo.=ucfirst($key).": ".$value;
        $corpo.="<hr>";
    }
    $info = array('assunto'=>$assunto,'corpo'=>$corpo);
    $mail = new Email('vps.dakicode.com','testes@dankicode.com ','gui123456','aluno');
    $mail->addAddress('contato@dankicode.com','aluno');
    $mail->formatarEmail($info);
    if($mail->enviarEmail()){
        $data['sucesso'] = true;
    }else{
        $data['erro'] = true;
    }

    //$data['retorno'] = 'sucesso';

    die(json_encode($data));
?>