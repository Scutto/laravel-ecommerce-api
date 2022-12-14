<?php

namespace Modules\Stripe\Console;

use Illuminate\Console\Command;
use Laravel\Cashier\Cashier;
use Modules\ShoppingCart\Entities\Coupon;

class UpdateCoupons extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $name = 'stripe:update_coupons';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update all the coupons from stripe';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $coupons = Cashier::stripe()->coupons->all();
        foreach($coupons as $coupon) {
            $newCoupon = new Coupon();
            $newCoupon->stripe_id = $coupon['id'];
            if($coupon['amount_off'] !== null) {
                $type = 'fixed';
                $amountOff = $coupon['amount_off'];
            } else {
                $type = 'percentage';
                $amountOff = $coupon['percent_off'];
            }
            $newCoupon->amount_off = $amountOff;
            $newCoupon->type = $type;
            $newCoupon->save();
        }
    }
}
