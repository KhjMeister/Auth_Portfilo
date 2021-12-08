<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class github extends Model
{
    use HasFactory;
    protected $filable = [
    	'id',
    	'login',
    	'avatar_url',
    	'html_url'
    ];
}
