<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\softDeletes;

class SubscriptionPlan extends Model
{
    use HasFactory,SoftDeletes;

    protected $fillable = ['name','price', 'active_period_in_months', 'features'];
}
