<?php

namespace Tests\Feature\Http\Controllers;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Str;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class PageControllerTest extends TestCase
{
    use RefreshDatabase;

    public static function provide_page_slugs(): array {
        return [
            ['portfolio']
        ];
    }

    /**
     * @test
     */
    public function it_should_redirect_from_home_to_portfolio_page(): void {
        $this->get("/")
            ->assertRedirect("/pages/portfolio")
            ->assertStatus(302);
    }

    /**
     * @dataProvider provide_page_slugs
     * @test
     */
    public function it_should_render_a_page_by_given_slug($slug): void
    {
        $component = Str::title($slug);

        $this->get("/pages/${slug}")
            ->assertStatus(200)
            ->assertInertia(fn (AssertableInertia $page) => $page
                ->component("{$component}/Show")
            );
    }
}
