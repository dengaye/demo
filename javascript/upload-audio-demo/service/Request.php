<?php
    class Request
    {
        private static $method_type = array('post', 'get');

        // 测试数据
        private static $test_data = array(
            1 => array('file'=>'audio_test1','id'=>1)
        );

        public static function getRequest()
        {
            $method = strtolower($_SERVER['REQUEST_METHOD']);
            if (in_array($method, self::$method_type)) {
                $data_name = $method."Data";
                return self::$data_name($_REQUEST);
            }
            return false;
        }

        private static function getData($request_data)
        {
            $file_id = (int)$request_data['class'];
            $data = array();
            if (!empty($request_data['id'])) {
                
            }
            if ($file_id > 0) {
                return self::$test_data[$file_id];
            } else {
                return self::$test_data;
            }
        }

        private static function postData($request_data)
        {
            $file_id = (int)$request_data['class'];
            if ($file_id > 0) {
                return self::$test_data[$file_id];
            } else {
                return self::$test_data;
            }
        }
    }
?>