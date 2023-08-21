<?php

namespace App\Http\Controllers;

use App\Models\Package as ModelsPackage;
use Illuminate\Http\Request;
use App\Helpers\PackageSingleton;


class PackageController extends Controller
{
    public function showAllPackages()
    {
        $packages = ModelsPackage::all();
        return $packages;
    }
    public function showPackageById($id)
    {
        $package = ModelsPackage::find($id);

        if (!$package) {
            return redirect()->route('packages.index')->with('error', 'Package not found');
        }

        PackageSingleton::getInstance()->setPackageID($package->id);

        return $package;
    }

}
