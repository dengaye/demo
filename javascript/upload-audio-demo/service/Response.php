<?php
class Response
{
    const HTTP_VERSION = 'HTTP/1.1';

    public static function serndResponse($data)
    {
        if ($data) {
            $code = 200;
            $message = 'OK';
        } else {
            $code = 400;
            $data = array('error' => 'Not Found');
            $message = "Not Found";
        }

        header(self::HTTP_VERSION . " $code $message ");
        $content_type = isset($_SERVER['CONTENT_TYPE']) ? $_SERVER['CONTENT_TYPE'] : $_SERVER['HTTP_ACCEPT'];
        if (strpos($content_type, 'application/json') !== false) {
            header("Content-Type: application/json");
            echo self::encodeJson($data);
        }elseif (strpos($content_type, 'application/xml') !== false) {
            header("Content-Type: application/xml");
            echo self::encodeXml($data);
        }else{
            header("Content-Type: text/html");
            echo self::encodeHtml($data);
        }

    }
        // json 格式
    private static function encodeJson($responseData)
    {
        return json_encode($responseData);
    }

    // xml 格式
    private static function encodeXml($responseData)
    {
        $xml = new SimpleXMLElement('<?xml version="1.0"?><rest></rest>');
        foreach ($responseData as $key => $value) {
            if (is_array($value)) {
                foreach ($value as $k => $v) {
                    $xml->addChild($k,$v);
                }
            }else{
                $xml->addChild($key,$value);
            }
        }
        return $xml->asXML();
    }

    // html 格式
    private static function encodeHtml($responseData)
    {
        $html = "<table border='1'>";
        foreach ($responseData as $key => $value) {
            $html .= "<tr>";
            if (is_array($value)) {
                foreach ($value as $k => $v) {
                    $html .= "<td>$k</td><td>$v</td>";
                }
            }else{
                $html .= "<td>$key</td><td>$value</td>";
            }
            $html .= "</tr>";
        }
        $html .="</table>";
        return $html;
    }
  
}
?>
