module.exports = {
	type: "css",
	styles: new Map([
		[
			"play",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 24px; height: 24px; border-radius: 50%; margin: 11px auto 0px; border: 2px solid rgb(97, 121, 166); }",
				".extend::before { border-top: 6px solid transparent; border-bottom: 6px solid transparent; border-left: 10px solid rgb(97, 121, 166); margin: 6px 0px 0px 8px; }"
			]
		],
		[
			"stop",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 24px; height: 24px; border-radius: 50%; margin: 11px auto 0px; border: 2px solid rgb(97, 121, 166); }",
				".extend::before { background: rgb(97, 121, 166); margin: 7px; width: 10px; height: 10px; }"
			]
		],
		[
			"pause",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 24px; height: 24px; border-radius: 50%; margin: 11px auto 0px; border: 2px solid rgb(97, 121, 166); }",
				".extend::before { background: rgb(97, 121, 166); margin: 7px 2px 0px 7px; width: 4px; height: 10px; }",
				".extend::after { background: rgb(97, 121, 166); margin: 7px 2px 0px 13px; width: 4px; height: 10px; }"
			]
		],
		[
			"back",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 24px; height: 24px; border-radius: 50%; margin: 11px auto 0px; border: 2px solid rgb(97, 121, 166); }",
				".extend::before { border-top: 6px solid transparent; border-bottom: 6px solid transparent; border-right: 7px solid rgb(97, 121, 166); margin: 6px 0px 0px 4px; }",
				".extend::after { border-top: 6px solid transparent; border-bottom: 6px solid transparent; border-right: 7px solid rgb(97, 121, 166); margin: 6px 0px 0px 10px; }"
			]
		],
		[
			"next",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 24px; height: 24px; border-radius: 50%; margin: 11px auto 0px; border: 2px solid rgb(97, 121, 166); }",
				".extend::before { border-top: 6px solid transparent; border-bottom: 6px solid transparent; border-left: 7px solid rgb(97, 121, 166); margin: 6px 0px 0px 7px; }",
				".extend::after { border-top: 6px solid transparent; border-bottom: 6px solid transparent; border-left: 7px solid rgb(97, 121, 166); margin: 6px 0px 0px 13px; }"
			]
		],
		[
			"stripes",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 24px; height: 24px; border-radius: 50%; margin: 11px auto 0px; border: 2px solid rgb(97, 121, 166); }",
				".extend::after { width: 12px; height: 2px; background: rgb(97, 121, 166); margin: 11px 0px 0px 6px; box-shadow: rgb(97, 121, 166) 0px 4px 0px, rgb(97, 121, 166) 0px -4px 0px; }"
			]
		],
		[
			"arrowup",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 24px; height: 24px; border-radius: 50%; margin: 11px auto 0px; border: 2px solid rgb(97, 121, 166); }",
				".extend::after { width: 4px; height: 7px; background: rgb(97, 121, 166); margin: 11px 0px 0px 10px; }",
				".extend::before { width: 0px; border-left: 6px solid transparent; border-right: 6px solid transparent; border-bottom: 6px solid rgb(97, 121, 166); margin: 6px 0px 0px 6px; }"
			]
		],
		[
			"arrowdown",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 24px; height: 24px; border-radius: 50%; margin: 11px auto 0px; border: 2px solid rgb(97, 121, 166); }",
				".extend::after { width: 4px; height: 7px; background: rgb(97, 121, 166); margin: 7px 0px 0px 10px; }",
				".extend::before { width: 0px; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 6px solid rgb(97, 121, 166); margin: 13px 0px 0px 6px; }"
			]
		],
		[
			"arrowright",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 24px; height: 24px; border-radius: 50%; margin: 11px auto 0px; border: 2px solid rgb(97, 121, 166); }",
				".extend::after { width: 7px; height: 4px; background: rgb(97, 121, 166); margin: 10px 0px 0px 11px; }",
				".extend::before { width: 0px; border-top: 6px solid transparent; border-bottom: 6px solid transparent; border-right: 7px solid rgb(97, 121, 166); margin: 6px 0px 0px 5px; }"
			]
		],
		[
			"arrowleft",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 24px; height: 24px; border-radius: 50%; margin: 11px auto 0px; border: 2px solid rgb(97, 121, 166); }",
				".extend::after { width: 7px; height: 4px; background: rgb(97, 121, 166); margin: 10px 0px 0px 6px; }",
				".extend::before { width: 0px; border-top: 6px solid transparent; border-bottom: 6px solid transparent; border-left: 7px solid rgb(97, 121, 166); margin: 6px 0px 0px 12px; }"
			]
		],
		[
			"clock",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 24px; height: 24px; border: 2px solid rgb(97, 121, 166); border-radius: 50%; margin: 11px auto 0px; }",
				".extend::before { width: 2px; height: 8px; background: rgb(97, 121, 166); border-radius: 2px; margin: 6px 0px 0px 11px; }",
				".extend::after { width: 6px; height: 2px; background: rgb(97, 121, 166); border-radius: 2px; margin: 14px 0px 0px 11px; transform: rotate(35deg); }"
			]
		],
		[
			"points",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 24px; height: 24px; border: 2px solid rgb(97, 121, 166); border-radius: 50%; margin: 11px auto 0px; }",
				".extend::after { width: 4px; height: 4px; background: rgb(97, 121, 166); border-radius: 50%; margin: 10px 0px 0px 4px; box-shadow: rgb(97, 121, 166) 6px 0px 0px, rgb(97, 121, 166) 12px 0px 0px; }"
			]
		],
		[
			"video",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 16px; height: 14px; background: rgb(97, 121, 166); border-radius: 3px; float: left; margin: 19px 0px 0px 16px; }",
				".extend::after { border-width: 6px 10px; border-style: solid; border-color: transparent rgb(97, 121, 166) transparent transparent; margin: 1px 0px 0px 2px; }"
			]
		],
		[
			"cloud",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { background: rgb(97, 121, 166); height: 10px; border-radius: 5px; width: 24px; float: left; margin: 24px 0px 0px 12px; }",
				".extend::before { background: rgb(97, 121, 166); height: 8px; border-radius: 50%; width: 8px; margin: -4px 0px 0px 3px; }",
				".extend::after { background: rgb(97, 121, 166); height: 12px; border-radius: 50%; width: 12px; margin: -7px 0px 0px 9px; }"
			]
		],
		[
			"comment",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 20px; height: 14px; background: rgb(97, 121, 166); border-radius: 3px; float: left; margin: 17px 0px 0px 15px; }",
				".extend::before { margin: 5px 0px 0px 8px; width: 6px; height: 6px; border-bottom: 6px solid transparent; border-left: 6px solid rgb(97, 121, 166); }"
			]
		],
		[
			"heart",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { transform: rotate(45deg); width: 15px; height: 10px; background: rgb(97, 121, 166); border-radius: 10px 0px 0px 10px; margin: 20px 0px 0px 16px; }",
				".extend::after { position: absolute; width: 10px; height: 10px; background: rgb(97, 121, 166); border-radius: 50%; margin: -5px 0px 0px 5px; }"
			]
		],
		[
			"yes",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { float: left; margin: 22px 0px 0px 18px; transform: rotate(135deg); width: 20px; border-radius: 4px; height: 4px; background: rgb(97, 121, 166); }",
				".extend::after { transform: rotate(90deg); width: 10px; border-radius: 4px; height: 4px; background: rgb(97, 121, 166); margin: 3px 0px 0px 13px; }"
			]
		],
		[
			"no",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { float: left; margin: 22px 0px 0px 15px; transform: rotate(45deg); width: 20px; border-radius: 4px; height: 4px; background: rgb(97, 121, 166); }",
				".extend::after { transform: rotate(90deg); width: 20px; border-radius: 4px; height: 4px; background: rgb(97, 121, 166); }"
			]
		],
		[
			"search",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { border: 3px solid rgb(97, 121, 166); height: 8px; border-radius: 50%; width: 8px; float: left; margin: 17px 0px 0px 18px; }",
				".extend::after { background: rgb(97, 121, 166); transform: rotate(45deg); height: 4px; border-radius: 2px; width: 6px; margin: 8px 0px 0px 7px; }"
			]
		],
		[
			"wheels",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 16px; height: 16px; border: 1px dashed rgb(97, 121, 166); border-radius: 50%; box-shadow: rgb(97, 121, 166) 0px 0px 0px 3px inset; margin: 16px 0px 0px 15px; }"
			]
		],
		[
			"share",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 8px; height: 8px; border-width: 1px 1px 2px 2px; border-style: solid; border-color: transparent transparent rgb(97, 121, 166) rgb(97, 121, 166); border-image: initial; transform: rotate(45deg); margin: 20px 0px 0px 21px; }",
				".extend::before { width: 6px; height: 6px; margin: 6px 0px 0px -4px; background: rgb(97, 121, 166); border-radius: 50%; box-shadow: rgb(97, 121, 166) 10px 0px 0px, rgb(97, 121, 166) 0px -10px 0px; }"
			]
		],
		[
			"marker",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 16px; height: 16px; border-radius: 50% 50% 50% 0px; background: rgb(97, 121, 166); transform: rotate(-45deg); left: 50%; top: 50%; margin: 16px 0px 0px 16px; }",
				".extend::after { width: 8px; height: 8px; position: absolute; margin: 4px 0px 0px 4px; background: rgb(42, 42, 52); border-radius: 50%; }"
			]
		],
		[
			"cam",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 18px; height: 18px; border: 2px solid rgb(97, 121, 166); border-radius: 3px; box-shadow: rgb(97, 121, 166) 0px 7px 0px inset; margin: 14px 0px 0px 14px; }",
				".extend::before { width: 5px; height: 5px; background: rgb(42, 42, 52); border-radius: 50%; margin: 0px 0px 0px 13px; }",
				".extend::after { width: 8px; height: 8px; background: rgb(42, 42, 52); border-radius: 50%; border: 2px solid rgb(97, 121, 166); margin: 2px 0px 0px 3px; }"
			]
		],
		[
			"calendar",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 18px; height: 13px; border: 2px solid rgb(97, 121, 166); border-radius: 3px; box-shadow: rgb(97, 121, 166) 0px 3px 0px inset; margin: 18px 0px 0px 14px; }",
				".extend::before { width: 2px; height: 5px; background: rgb(42, 42, 52); border: 2px solid rgb(97, 121, 166); border-radius: 2px; margin: -6px 0px 0px 2px; z-index: 1; }",
				".extend::after { width: 2px; height: 5px; background: rgb(42, 42, 52); border: 2px solid rgb(97, 121, 166); border-radius: 2px; margin: -6px 0px 0px 10px; }"
			]
		],
		[
			"link",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 6px; height: 8px; border-width: 0em 2px 2px; border-style: solid; border-color: transparent rgb(97, 121, 166) rgb(97, 121, 166); border-image: initial; border-radius: 0px 0px 6px 6px; margin: 24px 0px 0px 15px; transform: rotate(45deg); }",
				".extend::before { width: 6px; height: 8px; border-width: 2px 2px 0em; border-style: solid; border-color: rgb(97, 121, 166) rgb(97, 121, 166) transparent; border-image: initial; border-radius: 6px 6px 0px 0px; margin: -14px 0px 0px -2px; }",
				".extend::after { width: 2px; height: 10px; background: rgb(97, 121, 166); border-radius: 1px; margin: -7px 0px 0px 2px; }"
			]
		],
		[
			"doc",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 16px; height: 20px; border: 2px solid rgb(97, 121, 166); border-radius: 3px; margin: 14px 0px 0px 15px; }",
				".extend::after { width: 8px; height: 8px; border-radius: 0px 0px 2px; background-image: -webkit-linear-gradient(left top, rgb(42, 42, 52) 0% 50%, rgb(97, 121, 166) 51% 100%); margin: -2px 0px 0px -2px; }",
				".extend::before { width: 10px; height: 1px; background: rgb(97, 121, 166); margin: 9px 0px 0px 3px; box-shadow: rgb(97, 121, 166) 0px 3px 0px, rgb(97, 121, 166) 0px 6px 0px; }"
			]
		],
		[
			"macbook",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 18px; height: 12px; border: 2px solid rgb(97, 121, 166); border-radius: 0.2em 0.2em 0px 0px; margin: 15px 0px 0px 14px; }",
				".extend::after { width: 30px; height: 2px; background: rgb(97, 121, 166); border-radius: 0px 0px 2px 2px; margin: 14px 0px 0px -6px; }",
				".extend::before { width: 8px; height: 1px; background: rgba(0, 0, 0, 0.6); margin: 14px 0px 0px 5px; z-index: 1; }"
			]
		],
		[
			"akku",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 16px; height: 8px; border: 2px solid rgb(42, 42, 52); background: rgb(97, 121, 166); border-radius: 2px; margin: 18px 0px 0px 14px; box-shadow: rgb(97, 121, 166) 0px 0px 0px 2px, rgb(42, 42, 52) -4px 0px 0px inset; }",
				".extend::after { width: 2px; height: 8px; background: rgb(97, 121, 166); border-radius: 2px; margin: 0px 0px 0px 20px; }"
			]
		],
		[
			"phone",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 8px; height: 8px; background: rgb(97, 121, 166); border-radius: 8px 5px 5px 8px; box-shadow: rgb(97, 121, 166) 0px 16px 0px 0px; transform: rotate(45deg); margin: 14px 0px 0px 27px; }",
				".extend::after { width: 5px; height: 18px; background: rgb(97, 121, 166); margin: 3px 0px 0px -1px; border-radius: 100%; }"
			]
		],
		[
			"iphone",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { height: 22px; width: 13px; border: 2px solid rgb(97, 121, 166); border-radius: 3px; box-shadow: rgb(97, 121, 166) 0px 2px 0px inset, rgb(97, 121, 166) 0px -3px 0px inset; margin: 11px 0px 0px 16px; }",
				".extend::after { height: 1px; width: 5px; background: rgb(42, 42, 52); border-radius: 3px; margin: 0px 0px 0px 4px; }",
				".extend::before { height: 3px; width: 3px; background: rgb(42, 42, 52); border-radius: 3px; margin: 20px 0px 0px 5px; }"
			]
		],
		[
			"mail",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 22px; height: 16px; border: 2px solid rgb(97, 121, 166); border-radius: 3px; margin: 14px 0px 0px 12px; }",
				".extend::after { width: 15px; height: 2px; background: rgb(97, 121, 166); border-radius: 3px; transform: rotate(35deg); margin: 3px 0px 0px -2px; }",
				".extend::before { width: 15px; height: 2px; background: rgb(97, 121, 166); border-radius: 3px; transform: rotate(-35deg); margin: 3px 0px 0px 10px; }"
			]
		],
		[
			"trash",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { border: 2px solid rgb(97, 121, 166); width: 12px; height: 14px; border-radius: 0px 0px 2px 2px; margin: 17px 0px 0px 17px; }",
				".extend::after { background: rgb(97, 121, 166); width: 20px; height: 3px; border-radius: 2px; margin: -3px 0px 0px -4px; }",
				".extend::before { background: rgb(97, 121, 166); width: 6px; height: 3px; border-radius: 2px; margin: -6px 0px 0px 3px; }"
			]
		],
		[
			"upload",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 18px; height: 6px; border-right: 3px solid rgb(97, 121, 166); border-bottom: 3px solid rgb(97, 121, 166); border-left: 3px solid rgb(97, 121, 166); border-image: initial; border-top: none; margin: 24px 0px 0px 13px; }",
				".extend::before { width: 4px; height: 8px; background: rgb(97, 121, 166); margin: -6px 0px 0px 7px; }",
				".extend::after { border-style: solid; border-color: transparent transparent rgb(97, 121, 166); border-width: 5px; margin: -16px 0px 0px 4px; }"
			]
		],
		[
			"download",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 18px; height: 6px; border-right: 3px solid rgb(97, 121, 166); border-bottom: 3px solid rgb(97, 121, 166); border-left: 3px solid rgb(97, 121, 166); border-image: initial; border-top: none; margin: 24px 0px 0px 13px; }",
				".extend::before { width: 4px; height: 8px; background: rgb(97, 121, 166); margin: -11px 0px 0px 7px; }",
				".extend::after { border-style: solid; border-color: rgb(97, 121, 166) transparent transparent; border-width: 5px; margin: -3px 0px 0px 4px; }"
			]
		],
		[
			"profil",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { border-radius: 1em 1em 0.5em 0.5em; background: rgb(97, 121, 166); width: 16px; height: 8px; margin: 24px 0px 0px 16px; }",
				".extend::before { width: 8px; height: 9px; border-radius: 50%; background: rgb(97, 121, 166); margin: -10px 0px 0px 4px; }"
			]
		],
		[
			"key",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 4px; height: 4px; border: 4px solid rgb(97, 121, 166); border-radius: 50%; margin: 18px 0px 0px 12px; }",
				".extend::after { width: 14px; height: 4px; border-radius: 0px 1px 4px 0px; border-bottom: 2px dotted rgb(42, 42, 52); background: rgb(97, 121, 166); margin: 0px 0px 0px 7px; }"
			]
		],
		[
			"box",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 16px; height: 18px; background-color: rgb(97, 121, 166); transform: perspective(50px) rotateY(-45deg); margin: 15px 0px 0px 15px; }",
				".extend::after { width: 1px; height: 12px; background-color: rgb(97, 121, 166); margin: 3px 0px 0px 19px; }"
			]
		],
		[
			"youtube",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 22px; height: 18px; border-radius: 20%; margin: 15px auto 0px; background: rgb(97, 121, 166); }",
				".extend::before { border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-left: 8px solid rgb(42, 42, 52); margin: 4px 0px 0px 8px; }"
			]
		],
		[
			"browser",
			[
				'.extend::before, .extend::after { display: block; content: ""; position: absolute; }',
				".extend { width: 20px; height: 17px; border-radius: 2px; margin: 15px auto 0px; border: 1px solid rgb(97, 121, 166); box-shadow: rgb(42, 42, 52) 0px 5px 0px inset, rgb(97, 121, 166) 0px 6px 0px inset; }",
				".extend::after { background: rgb(97, 121, 166); width: 2px; height: 1px; margin: 2px 1px; box-shadow: rgb(97, 121, 166) 3px 0px 0px, rgb(97, 121, 166) 6px 0px 0px; }"
			]
		]
	])
};
