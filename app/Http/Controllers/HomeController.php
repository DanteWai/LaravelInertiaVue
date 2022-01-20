<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Home', [
            'title' => 'Home Page'
        ]);
    }

    public function about(): \Inertia\Response
    {
        return Inertia::render('Home', [
            'title' => 'About Page'
        ]);
    }
}
