<?php
namespace App\Helpers;

class PackageSingleton
{
    private static $instance = null;
    private $packageID;

    private function __construct()
    {}

    public static function getInstance()
    {
        if (!self::$instance) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    public function setPackageID($packageID)
    {
        $this->packageID = $packageID;
    }

    public function getPackageID()
    {
        return $this->packageID;
    }
}
