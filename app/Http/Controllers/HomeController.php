<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'title' => 'Welcome to the Pet Show!',
            'description' => 'Discover amazing pets and participate in the show!',
        ]);
    }
}
