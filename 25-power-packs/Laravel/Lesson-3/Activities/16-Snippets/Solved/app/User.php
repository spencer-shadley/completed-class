<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    public function snippets()
    {
      return $this->hasMany(Snippet::class);
    }

    /**
     * The attributes that are mass assignable.
     *
     * @const array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @const array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

}
