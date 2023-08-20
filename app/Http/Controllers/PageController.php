<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    /**
     * @return RedirectResponse
     */
    public function index(): RedirectResponse {
        return redirect()->route('pages.show', ['page' => 'portfolio']);
    }

    /**
     * @param string $page
     * @return Response
     */
    public function show(string $page): Response {
        $component = Str::title($page);
        return Inertia::render("${component}/Show", [

        ]);
    }
}
