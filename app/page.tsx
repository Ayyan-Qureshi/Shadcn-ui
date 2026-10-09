import React from 'react';
import { Heart, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function JobCardPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black p-4">
      <Card className="w-[380px] bg-white rounded-3xl p-6 shadow-2xl border-none">
        <CardContent className="p-0 space-y-4">
          
          {/* Top Bar: Avatar & Heart Icon */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10 border border-gray-200">
                <AvatarImage 
                  src="/profile.jpeg.jpeg" 
                  alt="Muhammad Ayyan Qureshi" 
                  className="object-cover" 
                />
                <AvatarFallback className="bg-gray-100 text-xs font-semibold text-gray-600">
                  MA
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-sm font-bold text-gray-900">Muhammad Ayyan Qureshi</h3>
                <p className="text-xs text-gray-400">Posted 2h ago</p>
              </div>
            </div>

            <Button variant="ghost" size="icon" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 p-0">
              <Heart className="w-4 h-4 fill-black text-black" />
            </Button>
          </div>

          {/* Heading Title */}
          <div className="pt-1">
            <h2 className="text-base font-bold text-gray-900 leading-snug">
              Looking for SM manager to create posts across various platforms
            </h2>
            <p className="text-xs text-gray-400 mt-2 font-normal">
              We're seeking a skilled Social Media Manager to...
            </p>
          </div>

          {/* Skill Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            <Badge className="bg-[#eef2ff] text-[#3b82f6] hover:bg-[#eef2ff] rounded-md text-[11px] font-semibold px-2.5 py-0.5 border-none">
              SMM
            </Badge>
            <Badge className="bg-[#eef2ff] text-[#3b82f6] hover:bg-[#eef2ff] rounded-md text-[11px] font-semibold px-2.5 py-0.5 border-none">
              Growth Strategy
            </Badge>
            <Badge className="bg-[#eef2ff] text-[#3b82f6] hover:bg-[#eef2ff] rounded-md text-[11px] font-semibold px-2.5 py-0.5 border-none">
              Start Up
            </Badge>
            <Badge className="bg-[#eef2ff] text-[#3b82f6] hover:bg-[#eef2ff] rounded-md text-[11px] font-semibold px-2.5 py-0.5 border-none">
              Brand
            </Badge>
          </div>

          {/* Dotted Line Divider */}
          <div className="border-b border-dotted border-gray-200 my-3" />

          {/* Pricing & Details */}
          <div className="pt-1">
            <div className="text-2xl font-bold text-gray-900">
              $150 - $200<span className="text-base font-normal text-gray-600">/h</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Hourly rate • 100% Remote
            </p>
          </div>

          {/* Blue Apply Button */}
          <Button className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-xl py-5 text-sm font-semibold flex items-center justify-center gap-2 shadow-sm">
            <Zap className="w-4 h-4 fill-white text-white" />
            Apply
          </Button>

        </CardContent>
      </Card>
    </div>
  );
}